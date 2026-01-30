#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

console.log('Generating companions-data.js from JSON files...\n');

const companions = ['jindo', 'ember', 'mystikat', 'hootini', 'globbie', 'acornelius', 'florence', 'mechabird', 'snekles'];

const companionsData = {};

companions.forEach(companionId => {
  const jsonPath = path.join('data', `${companionId}.json`);
  try {
    const data = JSON.parse(fs.readFileSync(jsonPath, 'utf8'));
    companionsData[companionId] = data;
    console.log(`✓ Loaded ${data.name}`);
  } catch (error) {
    console.error(`✗ Error loading ${companionId}:`, error.message);
  }
});

// Generate the JavaScript file
const output = `// Auto-generated from JSON files
// To regenerate: node generate-data.js

const companionsData = ${JSON.stringify(companionsData, null, 2)};
`;

fs.writeFileSync('companions-data.js', output, 'utf8');

console.log('\n✓ Generated companions-data.js');
console.log('✓ File works without a server!');
