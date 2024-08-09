# Dynamic Site with ANGULAR

There is a website to present a figurine catalog. Products are displayed dynamically based on a JSON file.
User can filter products by name or by price (ascending or descending).

## :magic_wand: Features

- ✨ Icons with FontAwesome
- ✨ Responsive
- ✨ A component to display cards products
- ✨ A pipe to sort products by price (ascending or descending)
- ✨ A pipe to filter products by name

## 🏗️ Getting Started

### 📄 Prerequisites

You'll need [Git](https://git-scm.com/downloads) and [Node.js](https://nodejs.org/en) (which comes with NPM) installed on your computer.

```
node@v16.4.2 or higher
npm@7.18.1 or higher
git@2.30.1 or higher
```

### 🔨 Installation

From your command line, first clone the project :

```sh
# Clone repository
$ git clone https://github.com/AlexD004/CEF_au-petit-village

# Move into repository
$ cd CEF_au-petit-village/angular-aupetitvillage
```

After that, you can install the dependencies either using NPM.

```
# Install dependencies
$ npm install

# Run the project in Dev Mode to see the result
$ ng serve --open
```

## 🎚️ Custom set-up

### 📋 How to update products list

You can edit the products list in the service :

📂 angular-aupetitvillage
--> 📂src
--> 📂app
--> 📂services
--> 📄products.service.ts
        
1. In the main folder 'angular-aupetitvillage', search the folder 'src'
2. In the folder 'src', search the folder 'app'
3. In the folder 'app', search the folder 'services'
4. In the folder 'services', search the file 'products.service.ts'
5. Open it !
6. Adjust like you need

```
# Example of datas product :

products = [
      { 
        "id": 1,
        "slug": "asterix",
        "name": "Astérix le Gaulois",
        "price": 29.99,
        "image": "../assets/products/asterix.jpg",
        "description": "Astérix, le plus célèbre des Gaulois, prêt pour une nouvelle aventure. Fabriqué à la main avec des détails soignés.",
        "detail": "Hauteur: 15 cm, Matériaux: Résine et peinture acrylique, Poids: 200g."
      }
];

To add a product, copy/paste the code between []. You have to copy all "key":"value" and {}.
Don't miss to add a coma to separate products, the image in the folder assets/products and update informations. You will have something like this :

products = [
      { 
        "id": 1,
        "slug": "asterix",
        "name": "Astérix le Gaulois",
        "price": 29.99,
        "image": "../assets/products/asterix.jpg",
        "description": "Astérix, le plus célèbre des Gaulois, prêt pour une nouvelle aventure. Fabriqué à la main avec des détails soignés.",
        "detail": "Hauteur: 15 cm, Matériaux: Résine et peinture acrylique, Poids: 200g."
      },
      { 
        "id": 2,
        "slug": "newslug",
        "name": "newName",
        "price": 00.00,
        "image": "../assets/products/img.jpg",
        "description": "A new description of the product",
        "detail": "Some details"
      }
];

```

### 📋 How to update social medias links

You can edit social medias links in the service :

📂 angular-aupetitvillage
--> 📂src
--> 📂app
--> 📂services
--> 📄reseaux-sociaux-url.service.ts
        
1. In the main folder 'angular-aupetitvillage', search the folder 'src'
2. In the folder 'src', search the folder 'app'
3. In the folder 'app', search the folder 'services'
4. In the folder 'services', search the file 'reseaux-sociaux-url.service.ts'
5. Open it !
6. Adjust like you need

```
# Example of datas product :

socialURLs = [
      { 
      name: "Facebook",
      icon: "fa-facebook",
      url: "#facebook_URL"
    }
];

To add your link, replace the url value.
Example :

socialURLs = [
      { 
      name: "Facebook",
      icon: "fa-facebook",
      url: "https://YOUR FACEBOOK URL"
    }
];

To add a link, copy/paste the code between []. You have to copy all "key":"value" and {}.
Example :

socialURLs = [
      { 
      name: "Facebook",
      icon: "fa-facebook",
      url: "https://YOUR FACEBOOK URL"
    },
    { 
      name: "Twitter",
      icon: "fa-x-twitter",
      url: "#twitter_URL"
    }
];

Icons are displayed with fontawesome. To have the good reference, consult the official website: https://fontawesome.com/

Several social medias are still displayed. If you don't want one, just remove the url value like this :

socialURLs = [
      { 
      name: "Facebook",
      icon: "fa-facebook",
      url: "https://YOUR FACEBOOK URL"
    },
    { 
      name: "Twitter",
      icon: "fa-x-twitter",
      url: ""
    }
];

In this example, facebook will apear in the site footer, but twitter will not.

```
