# Contacts Project

It is a small app that allows user to show, create and delete contacts data.

## Installation

To get started developing right away:

* install all project dependencies with `npm install`
* start the development server with `npm start`

## What You're Getting
```bash
├── README.md - This file.
├── package.json # npm package manager file. It's unlikely that you'll need to modify this.
├── public
│   ├── favicon.ico # React Icon, You may change if you wish.
│   └── index.html # DO NOT MODIFY
└── src
    ├── App.css # Styles for your app. Feel free to customize this as you desire.
    ├── App.js # This is the root of your app. Contains static HTML right now.
    ├── ContactsAPI.js # A JavaScript API for the provided Udacity backend. Instructions for the methods are below.
    ├── icons # Helpful images for your app. Use at your discretion.
    │   ├── cancel.svg
    │   ├── arrow-back.svg
    │   ├── person.svg	
    │   ├── person-add.svg
    │   └── search.svg
    ├── index.css # Global styles. You probably won't need to change anything here.
    ├── index.js # You should not need to modify this file. It is used for DOM rendering only.
    ├── ImageInput.js # This shows the functionality of uploading image.
    ├── CreateContact.js # This contains the form of creating new contact using ImageInput Component.
    └── ListContacts.js # This contains list of contacts through fetching getAll method from ContactsAPI.

```

Remember that good React design practice is to create new JS files for each component and use import/require statements to include them where they are needed.

## Backend Server

To simplify your development process, we've provided a backend server for you to develop against. The provided file [`ContactsAPI.js`](src/ContactsAPI.js) contains the methods you will need to perform necessary operations on the backend:

* [`getAll`](#getall)
* [`remove`](#remove)
* [`create`](#create)

### `getAll`

Method Signature:

```js
getAll()
```

* Returns a Promise which resolves to a JSON object containing a collection of contact objects.
* This collection represents the contacts data(Image, name, handle).

### `remove`

Method Signature:

```js
remove(contact)
```

* contact: `<Object>` containing at minimum an `id` attribute
* Returns a Promise which resolves to a JSON object containing the response data of the Delete request

### `create`

Method Signature:

```js
create(body)
```

* body: `<Object>` containing 'avatarURL', 'handle' and 'name' attributes
* Returns a Promise which resolves to a JSON object containing contact object.
