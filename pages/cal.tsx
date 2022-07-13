import React, { useState } from "react";

interface CalProps {}

export default function Cal({}: CalProps) {
  const [a, setA] = useState(0);
  const [b, setB] = useState(0);
  return (
    <div>
      <input
        type="number"
        value={a}
        onChange={(e) =>
          setA(e.target.value ? parseInt(e.target.value, 10) : 0)
        }
      />
      <input
        type="number"
        value={b}
        onChange={(e) =>
          setB(e.target.value ? parseInt(e.target.value, 10) : 0)
        }
      />
      <span>{a + b}</span>
    </div>
  );
}
