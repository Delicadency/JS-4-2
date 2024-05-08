function compare(a, b) {
  if (typeof a !== "number" || typeof b !== "number") {
    return "Wprowadź wartości liczbowe";
  } else {
    if (a > b) {
      return "1";
    } else if (a < b) {
      return "-1";
    } else {
      return "0";
    }
  }
}
