import mermaid from 'mermaid';

const currentGraphStr = `graph TD\nclassDef critical fill:#fca5a5,stroke:#f43f5e,stroke-width:2.5px,color:#7f1d1d;\nclassDef normal fill:#e0f2fe,stroke:#0ea5e9,stroke-width:1.5px,color:#0c4a6e;\n` + 
`    T1_1["<b>T1.1: Diseño del Chasis (5d)</b><br/>ES: 0 | EF: 5<br/>LS: 0 | LF: 5<br/>Holgura: 0d"]:::critical\n` + 
`    T1_2["<b>T1.2: Selección de Componentes (3d)</b><br/>ES: 5 | EF: 8<br/>LS: 5 | LF: 8<br/>Holgura: 0d"]:::critical\n` + 
`    T2_1["<b>T2.1: Armado Final (4d)</b><br/>ES: 8 | EF: 12<br/>LS: 8 | LF: 12<br/>Holgura: 0d"]:::critical\n` + 
`    T1_1 --> T1_2\n` + 
`    T1_2 --> T2_1\n` + 
`    linkStyle 0,1 stroke:#f43f5e,stroke-width:3px;\n`;

console.log(currentGraphStr);
