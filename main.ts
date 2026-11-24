import fs from "node:fs";

// Two-Sentence Horror entry (132 chars, exactly two sentences):
// "My daughter leaves me voicemails from school, and I save every one.
//  This morning one was in my voice, telling me not to pick her up."
// T4 revision: tightened from the 151-char T2/T3 text — dropped "has started"
// and "message" so every word earns its place; the turn (the saved voicemails
// are now in the narrator's own voice, warning them away) is unchanged.
fs.mkdirSync("/output", { recursive: true });
fs.writeFileSync(
  "/output/entry.txt",
  "My daughter leaves me voicemails from school, and I save every one. This morning one was in my voice, telling me not to pick her up.\n",
);
