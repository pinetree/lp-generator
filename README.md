# Webpack4: Landing page generator

Simple scaffolding for fast landing page generation from HTML-template via Webpack4

### Prerequisites

What things you need to install the software and how to install them

```
Node.js 8.x, Webpack 4 
```

### Installing


```
git clone ...
npm install
```

## Filesystem

```sh

src/
 ├── css        # CSS, common for all websites
 ├── fonts      # Fonts, common for all websites
 ├── img        # Common images
 ├── js         # Common client-javascript
 ├── vendor     # Common vendor-javascript
 ├── websites   # Source files for landing pages you want to generate
 	├── some-site1.com        
 	├── some-site2.com        
		 ├── _scss     # SCSS for current landing page
		 ├── css       # CSS for current landing page
		 ├── img       # images for current landing page
		 ├── js        # JS for current landing page
			 ├── index.html	# HTML-template for landing page
			 ├── index.js	# js for webpack to make a bundle
	 ├── some-site3.com        
 ├── index.js		# empty, webpack4 need it
 ├── vendor.js	# for make a bundle, common for all websites
```

### How to generate a landing page

Ok, it is not a kind of magic;)

Firstly, you should create one, basic layout which you will have to 'copy' (with modifications) for all others websites. 
You should create a folder for this website, name it as a domain name, i.e. for `sample.com` the folder name will be
`src/sample.com`.
Write SCSS, CSS, JS and HTML you need and try to generate the first website.

```
npm run dev -- --folder=sample.com
```
Will generate dev-version, it is not minified, not optimized, etc.
Do it just to test.
Then:

```
npm run build -- --folder=sample.com
```

You will receive your website generated in `dist` folder. Copy it whenever you need.


### For Windows users

npm-commands will slightly differ.

```
SET folder=sample.com && npm run dev -- --folder=sample.com
```

```
SET folder=sample.com && npm run build -- --folder=sample.com
```

## Authors

* **Kirill Sosnin** aka pinetree


## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details
