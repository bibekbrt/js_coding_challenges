function testScope() {
  var x = "I am var (function scoped)";
  let y = "I am let (block scoped)";
  const z = "I am const (block scoped)";

  console.log("Inside function:");
  console.log("x:", x);
  console.log("y:", y);
  console.log("z:", z);

  if (true) {
    var a = "var inside block (function scoped)";
    let b = "let inside block (block scoped)";
    const c = "const inside block (block scoped)";

    console.log("\nInside block:");
    console.log("a:", a);
    console.log("b:", b);
    console.log("c:", c);
  }

  console.log("\nOutside block:");
  console.log("a:", a);

  try { console.log(b); }
  catch { console.log("b: NOT accessible"); }

  try { console.log(c); }
  catch { console.log("c: NOT accessible"); }
}

testScope();   // ← **THIS must be present**
