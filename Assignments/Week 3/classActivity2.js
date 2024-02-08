function ageCheck(a) {
  if (a >= 18) {
    console.log("You are old enough to drive")
  } else if (a < 18) {
    console.log("You are left with ", (18 - a), " years to drive.")
  }
}

ageCheck(24)