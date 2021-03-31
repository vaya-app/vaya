export default function getVersions() {
  return {
    vaya: '0.0.1-alpha',
    electron: process.versions.electron,
    node: process.versions.node,
    chrome: process.versions.chrome,
  };
}
