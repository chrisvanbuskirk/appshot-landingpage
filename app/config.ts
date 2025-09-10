export const GITHUB_URL = "https://github.com/chrisvanbuskirk/appshot";

// Publicly overridable install commands (configure in Vercel if needed)
export const INSTALL_CMD =
  process.env.NEXT_PUBLIC_INSTALL_CMD ?? "npm install -g appshot";

export const NPX_CMD =
  process.env.NEXT_PUBLIC_NPX_CMD ?? "npx appshot@latest build ./screenshots";

