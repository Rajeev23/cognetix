import React, { useState } from "react";

// List of all UI components in your components/ui directory
const components = [
  "accordion.tsx",
  "alert.tsx",
  "badge.tsx",
  "button.tsx",
  "card.tsx",
  "dialog.tsx",
  "input.tsx",
  "navigation-menu.tsx",
  "select.tsx",
  "sheet.tsx",
  "textarea.tsx",
];

// The code for each component (copy-paste the full code for each here)
const componentCode: Record<string, string> = {
  "accordion.tsx": `// ...accordion.tsx code here...`,
  "alert.tsx": `// ...alert.tsx code here...`,
  "badge.tsx": `// ...badge.tsx code here...`,
  "button.tsx": `// ...button.tsx code here...`,
  "card.tsx": `// ...card.tsx code here...`,
  "dialog.tsx": `// ...dialog.tsx code here...`,
  "input.tsx": `// ...input.tsx code here...`,
  "navigation-menu.tsx": `// ...navigation-menu.tsx code here...`,
  "select.tsx": `// ...select.tsx code here...`,
  "sheet.tsx": `// ...sheet.tsx code here...`,
  "textarea.tsx": `// ...textarea.tsx code here...`,
};

export default function DocPage() {
  const [selected, setSelected] = useState(components[0]);

  return (
    <div className="flex min-h-screen">
      {/* Sidebar */}
      <aside className="w-64 bg-gray-100 dark:bg-gray-900 border-r p-4">
        <h2 className="font-bold mb-4">Components</h2>
        <ul>
          {components.map((name) => (
            <li key={name}>
              <button
                className={`w-full text-left px-2 py-1 rounded hover:bg-gray-200 dark:hover:bg-gray-800 ${
                  selected === name ? "bg-gray-200 dark:bg-gray-800 font-semibold" : ""
                }`}
                onClick={() => setSelected(name)}
              >
                {name.replace(".tsx", "")}
              </button>
            </li>
          ))}
        </ul>
      </aside>
      {/* Main content */}
      <main className="flex-1 p-8 overflow-auto">
        <h1 className="text-2xl font-bold mb-4">{selected.replace(".tsx", "")}</h1>
        <pre className="bg-gray-900 text-gray-100 p-4 rounded overflow-x-auto text-xs">
          {componentCode[selected] || "// Code not found"}
        </pre>
      </main>
    </div>
  );
}
