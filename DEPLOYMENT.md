# 🚀 Vercel Deployment Guide

## Step-by-Step Guide to Deploy Your Portfolio on Vercel

### Prerequisites
- ✅ Git repository (already done)
- ✅ Vercel account (sign up at [vercel.com](https://vercel.com))
- ✅ Code pushed to GitHub

---

## 📋 Deployment Steps

### Method 1: Deploy via Vercel Dashboard (Recommended)

1. **Go to Vercel**
   - Visit [vercel.com](https://vercel.com)
   - Sign in with your GitHub account

2. **Import Project**
   - Click "Add New..." → "Project"
   - Select your GitHub repository: `Meghraj2004/meghportfolio`
   - Click "Import"

3. **Configure Project**
   ```
   Framework Preset: Other
   Root Directory: ./
   Build Command: npm run build
   Output Directory: dist/public
   Install Command: npm install
   ```

4. **Environment Variables** (if needed)
   - Add any environment variables your app needs
   - Example:
     ```
     NODE_ENV=production
     DATABASE_URL=your_database_url
     ```

5. **Deploy**
   - Click "Deploy"
   - Wait for the build to complete (2-5 minutes)
   - Your site will be live at `https://your-project.vercel.app`

---

### Method 2: Deploy via Vercel CLI

1. **Install Vercel CLI**
   ```bash
   npm install -g vercel
   ```

2. **Login to Vercel**
   ```bash
   vercel login
   ```

3. **Deploy**
   ```bash
   # From your project root directory
   vercel
   ```

4. **Follow the prompts:**
   ```
   ? Set up and deploy "PortfolioForge"? [Y/n] y
   ? Which scope do you want to deploy to? Your Name
   ? Link to existing project? [y/N] n
   ? What's your project's name? meghportfolio
   ? In which directory is your code located? ./
   ```

5. **Deploy to Production**
   ```bash
   vercel --prod
   ```

---

## 🔧 Important Configuration Files

### 1. `vercel.json` (Already Created)
```json
{
  "version": 2,
  "buildCommand": "npm run build",
  "outputDirectory": "dist/public",
  "framework": null,
  "rewrites": [
    {
      "source": "/api/(.*)",
      "destination": "/api"
    },
    {
      "source": "/(.*)",
      "destination": "/index.html"
    }
  ]
}
```

### 2. `api/index.js` (Already Created)
This file handles the serverless function for your Express API.

---

## 🛠️ Build Configuration

### Update `package.json` scripts if needed:

```json
{
  "scripts": {
    "dev": "cross-env NODE_ENV=development tsx server/index.ts",
    "build": "vite build && esbuild server/index.ts --platform=node --packages=external --bundle --format=esm --outdir=dist",
    "start": "node dist/index.js",
    "vercel-build": "npm run build"
  }
}
```

---

## 🌐 Custom Domain Setup (Optional)

1. **Add Custom Domain in Vercel Dashboard**
   - Go to your project settings
   - Click "Domains"
   - Add your custom domain
   - Follow DNS configuration instructions

2. **DNS Configuration**
   - Add the following records to your DNS provider:
   ```
   Type: A
   Name: @
   Value: 76.76.21.21

   Type: CNAME
   Name: www
   Value: cname.vercel-dns.com
   ```

---

## 🔄 Automatic Deployments

Once connected to GitHub, Vercel will automatically deploy:
- ✅ **Production**: Every push to `main` branch
- ✅ **Preview**: Every push to other branches
- ✅ **PR Previews**: Every pull request

---

## 🐛 Troubleshooting

### Build Fails

1. **Check Build Logs**
   - Click on the failed deployment
   - Review the build logs for errors

2. **Common Issues:**
   - Missing dependencies: Run `npm install` locally first
   - TypeScript errors: Run `npm run check` to verify
   - Environment variables: Ensure all required vars are set

### API Routes Not Working

1. **Check API folder structure**
   ```
   api/
   └── index.js
   ```

2. **Verify vercel.json rewrites**
   - Ensure API routes are properly configured

3. **Check function logs**
   - Go to Vercel Dashboard → Functions
   - View real-time logs

### Static Files Not Loading

1. **Verify build output**
   ```bash
   npm run build
   # Check that dist/public exists with index.html
   ```

2. **Check outputDirectory in vercel.json**
   - Should match your build output directory

---

## 📊 Post-Deployment Checklist

- [ ] Site loads correctly
- [ ] All pages are accessible
- [ ] API routes work
- [ ] Forms submit successfully
- [ ] Images and assets load
- [ ] Mobile responsive
- [ ] SEO meta tags present
- [ ] Custom domain configured (if applicable)
- [ ] Analytics setup (optional)

---

## 🔗 Useful Links

- **Vercel Documentation**: https://vercel.com/docs
- **Vercel CLI Docs**: https://vercel.com/docs/cli
- **Deployment Issues**: https://vercel.com/support

---

## 📝 Quick Commands

```bash
# Login to Vercel
vercel login

# Deploy to preview
vercel

# Deploy to production
vercel --prod

# Check deployment status
vercel ls

# View logs
vercel logs [deployment-url]

# Pull environment variables
vercel env pull

# Link local project to Vercel project
vercel link
```

---

## 🎉 Success!

After deployment, your portfolio will be live at:
- **Vercel URL**: `https://your-project.vercel.app`
- **Custom Domain**: `https://yourdomain.com` (if configured)

### Share your portfolio:
- Add to LinkedIn
- Update GitHub profile
- Share on social media
- Include in resume

---

## 📧 Support

If you encounter any issues:
1. Check Vercel documentation
2. Review build logs
3. Contact Vercel support
4. Check GitHub issues

**Good luck with your deployment! 🚀**
