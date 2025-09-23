# 🐛 Bugster - Automated Testing for React.js

**Generate and run comprehensive tests for your React.js applications with AI-powered automation.**

This repository contains three different React.js demo implementations to showcase how Bugster can automatically generate and run tests for your web applications. Follow this step-by-step guide to try any implementation from scratch!

## 📁 Available Implementations

This repository includes three React.js examples:

### 1. `vite-react-router-v7/` - React Router v7 (Full-Stack)

- **Framework**: React 19 + Vite + React Router v7
- **Features**: Full-stack routing with server-side rendering capabilities
- **Styling**: Tailwind CSS
- **Port**: `http://localhost:5173`

### 2. `vite-typescript/` - Traditional SPA with React Router DOM

- **Framework**: React 19 + Vite + TypeScript
- **Routing**: React Router DOM v7 (client-side only)
- **Features**: Single Page Application with TypeScript
- **Port**: `http://localhost:5173`

### 3. `cra-javascript/` - Create React App

- **Framework**: React 19 + Create React App
- **Language**: JavaScript
- **Features**: Standard Create React App setup with built-in tooling
- **Port**: `http://localhost:3000`

## 🚀 Phase 1: Try Bugster Locally

### Step 1: Install Bugster CLI

#### macOS/Linux

```bash
curl -sSL https://github.com/Bugsterapp/bugster-cli/releases/latest/download/install.sh | bash -s -- -y
```

#### Verify Installation

```bash
bugster --version
```

_If the command doesn't work, open a new terminal to load the new command._

### Step 2: Clone and Run the Example

```bash
git clone https://github.com/Bugsterapp/bugster-reactjs-example.git
cd bugster-reactjs-example
```

#### Option A: React Router v7 Implementation

```bash
cd vite-react-router-v7
npm install
npm run dev
```

#### Option B: TypeScript SPA Implementation

```bash
cd vite-typescript
npm install
npm run dev
```

#### Option C: Create React App Implementation

```bash
cd cra-javascript
npm install
npm start
```

Your chosen React application should now be running at `http://localhost:5173` (for Vite implementations) or `http://localhost:3000` (for Create React App)

Open your editor:

```bash
# With Cursor
cursor .
# or with VS Code
code .
```

### Step 3: Try Bugster in Action

Navigate to your chosen implementation directory first:

```bash
# For React Router v7:
cd vite-react-router-v7
# OR for TypeScript SPA:
cd vite-typescript
# OR for Create React App:
cd cra-javascript
```

#### Initialize Bugster

```bash
bugster init
# or with specific configuration for Vite implementations
bugster init --project-name bugster-reactjs-example --url http://localhost:5173 --no-credentials
# or for Create React App
bugster init --project-name bugster-reactjs-example --url http://localhost:3000 --no-credentials
```

#### Generate Tests

All implementations already have some tests at `.bugster/tests` generated with the `bugster generate` command but you can generate more if you want:

```bash
bugster generate
```

_Bugster will analyze your React.js app and automatically generate comprehensive tests_

#### Run Generated Tests

```bash
bugster run
```

_Watch as Bugster runs the tests it generated for your application_

## 🚀 Phase 2: Deploy to Production with GitHub Integration

Ready to see Bugster in production? Let's deploy your own version and set up GitHub integration for automatic testing on every deployment.

### Step 1: Create Your Own Repository

After testing locally, create your own repository with this code:

**Create a new repository**

1. Create a new repository on GitHub
2. From your local directory, update the remote:

```bash
git add .
git commit -m "Add Bugster Integration"
git remote set-url origin https://github.com/YOUR_USERNAME/YOUR_REPO_NAME.git
git push -u origin main
```

### Step 2: Deploy to Vercel

1. Go to [Vercel Dashboard](https://vercel.com/dashboard)
2. Click "New Project"
3. Import **your repository** (the one you just created)
4. **Important**: Set the root directory to `vite-react-router-v7`, `vite-typescript`, or `cra-javascript` depending on which implementation you want to deploy
5. Deploy with default settings

### Step 3: Set Up GitHub Integration

Connect Bugster with GitHub to automatically run tests on every Vercel Preview deployment.

#### Enable Vercel Protection Bypass

According to the best secure practices, Vercel protects your Vercel Previews, so this step is essential to allow Bugster access to your Previews

1. In [Vercel Dashboard](https://vercel.com/dashboard), go to your project
2. Navigate to **Settings** → **Deployment Protection**
3. Find "Protection Bypass for Automation" and click **"Add Secret"**
4. Save (you can leave the value empty - it will be generated automatically)
5. Copy the generated secret

#### Configure Bugster

Add the secret to `.bugster/config.yaml` in your chosen implementation directory:

```yaml
"x-vercel-protection-bypass": "your-secret-here"
```

Push these changes:

```bash
git add .
git commit -m "Add Protection Vercel Bypass Automation token to bugster config.yaml"
git push
```

#### Connect Repository

1. Visit [Bugster Dashboard](https://gui.bugster.dev/dashboard)
2. Connect your GitHub repository
3. Test the integration by creating a PR

Create a Pull Request and watch Bugster automatically test your Vercel Preview! 🎉

## 🤝 Contributing

Found a bug or want to improve the demo? PRs welcome!

## 📚 Learn More

- [Bugster Documentation](https://docs.bugster.dev)
- [React.js Documentation](https://react.dev)
- [Vite Documentation](https://vite.dev/)
- [Vercel Platform](https://vercel.com/new)

---

**Made with ❤️ by the Bugster team**
