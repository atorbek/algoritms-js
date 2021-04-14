//// Преобразование типов. Примитивы

// "" + 1 + 0 = 0 + 1 + 0 = "10"
// "" - 1 + 0 = 0 - 1 + 0 = -1
// true + false = 1 + 0 = 1
// 6 / "3" = 2
// "2" * "3" = 6
// 4 + 5 + "px" = "9px"
// "$" + 4 + 5 = "$45"
// "4" - 2 = 2
// "4px" - 2 = NaN - 2 = NaN
// 7 / 0 = Infinity
// "  -9  " + 5 = " -9 5"
// "  -9  " - 5 = -14
// null + 1 = 0 + 1 = 1
// undefined + 1 = NaN + 1 = NaN
// " \t \n" - 2 = "" - 2 = 0 - 2 = -2

// true + false = 1 + 0 = 1
// 12 / "6" = 12 / 6 = 2
// "number" + 15 + 3 = "number" + 15 + 3 = "number153"
// 15 + 3 + "number" = "18number"
//   [1] > null = true > 0 = 1 > 0 = true
// "foo" + + "bar" = "foo" + NaN = "fooNaN"
// 'true' == true = false
// false == 'false' = false
// null == '' = 0 == 0 = true
// !!"false" == !!"true"
//   [‘x’] == ‘x’
// [] + null + 1
//   [1,2,3] == [1,2,3]
// {}+[]+{}+[1]
// !+[]+[]+![]
// new Date(0) - 0
// new Date(0) + 0
