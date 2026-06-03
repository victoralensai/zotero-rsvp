const fs = require('fs');

let manifest = JSON.parse(fs.readFileSync('manifest.json', 'utf8'));
manifest.version = '1.3.1';
fs.writeFileSync('manifest.json', JSON.stringify(manifest, null, 2) + '\n');

let update = JSON.parse(fs.readFileSync('update.json', 'utf8'));
update.addons['zotero-rsvp@local'].updates.unshift({
  version: '1.3.1',
  update_link: 'https://github.com/victoralensai/zotero-rsvp/releases/download/v1.3.1/zotero-rsvp-1.3.1.xpi',
  applications: {
    zotero: {
      strict_min_version: '7.0',
      strict_max_version: '9.*'
    }
  }
});
fs.writeFileSync('update.json', JSON.stringify(update, null, 2) + '\n');
