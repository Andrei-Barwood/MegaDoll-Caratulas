# Mega Doll Graphics & Interactive Projects

Welcome to the creative laboratory behind Mega Doll’s visual universe. This repository houses the source materials that breathe life into our musical project’s aesthetic dimension, serving as both archive and foundation for future explorations.

## 📁 Repository Structure

```bash
├── The Geomijul Authority Handbook/sketch_01/     # videoclips of the korean tint audio graffiti thing
├── background inicial/          # the animation on the main page of the site
├── caratulas 2025               # album covers of the now archived catalog
├── weekly events                # on certain ocasions events of 4 to 5 days duration
└── README.md
```

## 🎨 Philosophy

As the author of Mega Doll, I embrace an open-minded approach to creative collaboration. This repository functions as a Community Modification System (CMS) — a living extension of the entire Mega Doll ecosystem. Here, modification isn’t just welcome; it’s encouraged.
The guiding principle is simple yet profound: be creative, but more importantly, be sincere. Say what matters and always tell the truth.

## On DLCs and Lost Catalogs

I wholeheartedly encourage DLC (downloadable content) development for both future and recent Mega Doll releases. Unfortunately, our original catalog has been irretrievably lost, and with it, previous DLCs have vanished into the digital ether. There are currently no plans to recover this lost content — sometimes we must accept what’s gone and focus our energy on what’s yet to come.

## 🛠 Installation Guide

### Installing Processing from Source (macOS)

#### 1. Install Prerequisites
```bash
# Install Java Development Kit (JDK) 17 or later
brew install openjdk@17

# Install Apache Ant
brew install ant
```

#### 2. Set Up Environment Variables
```bash
echo 'export JAVA_HOME="/opt/homebrew/opt/openjdk@17/libexec/openjdk.jdk/Contents/Home"' >> ~/.zshrc
echo 'export PATH="$JAVA_HOME/bin:$PATH"' >> ~/.zshrc
source ~/.zshrc
```
#### 3. Clone and Build Processing
```bash
# Clone the Processing repository
git clone https://github.com/processing/processing.git
cd processing

# Build Processing
cd build
ant dist
```

#### 4. Launch Processing
```bash
# Navigate to the built application
cd macosx/work/Processing.app/Contents/MacOS
./Processing
```

### Installing p5.js from Source
#### Method 1: From GitHub
```bash
# Clone the p5.js repository
git clone https://github.com/processing/p5.js.git
cd p5.js

# Install dependencies
npm install

# Build p5.js
npm run build

# Start development server (optional)
npm start
```

### Method 2: Using Homebrew + npm
```bash
# Install Node.js and npm via Homebrew
brew install node npm

# Install p5.js globally
npm install -g p5-manager

# Or install locally in your project
npm install p5
```

### Method 3: Quick Setup for Web Development
```bash
# Create a new project directory
mkdir my-p5-project
cd my-p5-project

# Initialize npm project
npm init -y

# Install p5.js locally
npm install p5

# Create basic HTML structure
echo '<!DOCTYPE html>
<html>
<head>
    <script src="node_modules/p5/lib/p5.min.js"></script>
</head>
<body>
    <script src="sketch.js"></script>
</body>
</html>' > index.html

# Create basic sketch
echo 'function setup() {
    createCanvas(400, 400);
}

function draw() {
    background(220);
}' > sketch.js
```

## 🚀 Getting Started
1.  Clone this repository:
``` bash
git clone https://github.com/Andrei-Barwood/MegaDoll-Caratulas.git
cd MegaDoll-Caratulas
```


Feel free to modify, extend, or completely reimagine any of the included projects

## 🤝 Contributing
This repository thrives on community input. Whether you’re fixing bugs, adding features, or creating entirely new visual experiences, your contributions help extend the Mega Doll universe.
Remember: creativity flourishes in honesty. Share your authentic vision. Share the truth you know, if you're following the wiki you might starting to see through the cracks, if not, then follow here: [Mega Doll Fandom Official Wiki](https://mega-doll.fandom.com/wiki/Mega_Doll_Wiki)

## 📄 License

**Code**: MIT License - Feel free to use, modify, and distribute the Processing and p5.js code as you see fit, with attribution.

**Creative Assets**: CC BY 4.0 - Graphics, visual elements, and documentation are available under Creative Commons Attribution, allowing remixing and commercial use with proper credit.

See LICENSE files for full terms.

"We have plenty of sayings based on the Philosophy of Truth and Beauty" 

--Stanford University