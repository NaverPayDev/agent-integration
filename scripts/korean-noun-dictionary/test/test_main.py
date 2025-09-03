# Npay agent-payments-integration
# Copyright (c) 2025-present NAVER FINANCIAL Corp.
# Apache-2.0

import json
import os
import sys

from korean_noun_dictionary.main import main

DATA_DIR = os.path.join(os.path.dirname(__file__), "resources")


def test_main(monkeypatch, tmp_path):
    input_file_1 = os.path.join(DATA_DIR, "sample1.txt")
    input_file_2 = os.path.join(DATA_DIR, "sample2.txt")
    expected_file = os.path.join(DATA_DIR, "expected_output.json")
    output_file = tmp_path / "result.json"

    monkeypatch.setattr(
        sys,
        "argv",
        ["korean-noun-dictionary", input_file_1, input_file_2, "-o", str(output_file)],
    )

    main()

    assert output_file.exists()

    with open(output_file, encoding="utf-8") as f:
        actual = json.load(f)

    with open(expected_file, encoding="utf-8") as f:
        expected = json.load(f)

    assert actual == expected
