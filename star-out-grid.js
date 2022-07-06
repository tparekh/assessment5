function starOutGrid(grid) {
    expect(starOutGrid([
        ["A", "B", "C"],
        ["D", "E", "*"],
        ["G", "H", "I"],
      ])
      ).toEqual([
        ["A", "*", "C"],
        ["*", "*", "*"],
        ["F", "*", "H"],
      ]);
}
