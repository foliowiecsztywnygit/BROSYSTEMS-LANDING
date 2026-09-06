const fs = require('fs');
const path = require('path');
const dir = 'src/content/blog';

const files = fs.readdirSync(dir).filter(f => f.endsWith('.md'));

for (const file of files) {
  const p = path.join(dir, file);
  let content = fs.readFileSync(p, 'utf8');

  // Fix known corrupted strings from the previous script
  content = content.replace(/Chcesz zaktualizowa\uFFFD swoj\uFFFD stron\uFFFD\?/g, 'Chcesz zaktualizować swoją stronę?');
  content = content.replace(/Zbuduj\uFFFD dla Ciebie szybk\uFFFD, nowoczesn\uFFFD witryn\uFFFD\./g, 'Zbuduję dla Ciebie szybką, nowoczesną witrynę.');
  
  // Fix months in dates
  content = content.replace(/stycznia|lutego|marca|kwietnia|maja|czerwca|lipca|sierpnia|wrze\uFFFDnia|pa\uFFFDbziernika|listopada|grudnia/g, (match) => {
    if (match === 'wrze\uFFFDnia') return 'września';
    if (match === 'pa\uFFFDbziernika' || match === 'pa\uFFFDdziernika') return 'października';
    return match;
  });

  // Write back
  fs.writeFileSync(p, content, 'utf8');
  console.log('Fixed encoding in', file);
}
