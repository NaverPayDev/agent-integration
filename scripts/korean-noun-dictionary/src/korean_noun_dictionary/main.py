#!/usr/bin/env python3
# Npay agent-payments-integration
# Copyright (c) 2025-present NAVER FINANCIAL Corp.
# Apache-2.0

"""
문서에서 한국어 명사(복합명사, 단일명사)를 추출하여 검색 인덱싱용 사전을 구축합니다.
"""

import json
import os
import re
import sys
import glob
import argparse

from PyKomoran import Komoran


def create_noun_dict(document, komoran):
    """문서에서 명사를 추출하여 사전 구축"""
    noun_dict = {}

    tokens = re.split(r'[\s\n\t.,;:!?\'"()\[\]{}~`@#$%^&*\-_+=|\\<>/]+', document)
    tokens = list(filter(None, tokens))
    total = len(tokens)

    for idx, token in enumerate(tokens, 1):
        percent = (idx / total) * 100
        print(f"\r🔍 명사 추출 중... {percent:.1f}% ({idx}/{total})", end="")
        sys.stdout.flush()

        tagged = komoran.get_plain_text(token)
        tagged_tokens = tagged.strip().split()

        noun_morphs = []
        for t in tagged_tokens:
            morph, tag = t.rsplit("/", 1)
            if tag in ["NNG", "NNP", "NNB", "NP", "NR"]:
                noun_morphs.append(morph)
            else:
                break

        if noun_morphs:
            noun_word = "".join(noun_morphs)
            if len(noun_word) >= 2:
                if len(noun_morphs) == 1:
                    noun_dict[noun_word] = [noun_word]
                else:
                    noun_dict[noun_word] = noun_morphs + [noun_word]

    print()
    return noun_dict


def build_unified_noun_dict(file_paths):
    """각 파일별로 명사 사전 구축 후 통합"""
    komoran = Komoran("EXP")
    unified_noun_dict = {}

    for file_path in file_paths:
        try:
            with open(file_path, "r", encoding="utf-8") as f:
                document = f.read()

            noun_dict = create_noun_dict(document, komoran)
            unified_noun_dict.update(noun_dict)

        except Exception as e:
            print(f"❌ 오류: {file_path} - {e}")

    return unified_noun_dict


def main():
    parser = argparse.ArgumentParser(
        description="문서에서 한국어 명사를 추출하여 검색 인덱싱용 사전 구축"
    )
    parser.add_argument(
        "files", nargs="+", help="명사를 추출할 문서 파일 경로 (와일드카드 지원)"
    )
    parser.add_argument(
        "-o",
        "--output",
        default="noun_dictionary.json",
        help="명사 사전 JSON 파일명",
    )

    args = parser.parse_args()

    file_paths = []
    for pattern in args.files:
        file_paths.extend(glob.glob(pattern))

    file_paths = list(set(file_paths))

    if not file_paths:
        print("❌ 파일이 존재하지 않습니다.")
        sys.exit(1)

    noun_dict = build_unified_noun_dict(file_paths)
    sorted_dict = dict(sorted(noun_dict.items(), key=lambda x: len(x[0]), reverse=True))

    os.makedirs("out", exist_ok=True)
    output_path = os.path.join("out", args.output)

    with open(output_path, "w", encoding="utf-8") as f:
        json.dump(sorted_dict, f, ensure_ascii=False, indent=2)

    print(f"📙 명사 사전 구축 완료: {output_path}")


if __name__ == "__main__":
    main()
