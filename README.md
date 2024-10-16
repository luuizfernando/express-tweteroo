# Tweets API 🚀

This is a simple API for a Twitter-like microblogging application built with **Express** and **Node.js**. The API allows users to register, post tweets, and view other users' tweets. The API is organized into RESTful endpoints and implements basic features like paging and filtering.

## 🌐 Endpoints

- **POST** `/sign-up`: Registers a new user.
- **POST** `/tweets`: Posts a new tweet.
- **GET** `/tweets`: Lists tweets with pagination support.
- **GET** `/tweets/:username`: Lists all tweets from a specific user.

---

## 🛠️ Technologies

- **JavaScript (ES6+)** - Use of modern language resources.
- **Express** - Minimalist web framework for Node.js.
- **Node.js** - Execution environment for server-side JavaScript.
- **CORS** - Middleware to allow requests from different origins.

---

## 🚀 Features

- **User Registration**: Users can register by providing a username and avatar.
- **Publishing Tweets**: Authenticated users can send tweets.
- **Tweet Listing**: The API returns tweets, including pagination functionality to control how many tweets are displayed per page.
- **List of Tweets by User**: It is possible to view all tweets from a specific user.

---

## 🎮 How to Use

### **User Registration**

- **Endpoint**: `POST /sign-up`
- **Body**:
    ```json
    {
      "username": "exemplo",
      "avatar": "https://linkparaavatar.com/avatar.png"
    }
    ```

### **Tweet Post**

- **Endpoint**: `POST /tweets`
- **Headers**:  
  - `user`: Authenticated username.
- **Body**:
    ```json
    {
      "tweet": "Este é meu tweet!"
    }
    ```

### **List of Tweets (with pagination)**

- **Endpoint**: `GET /tweets`
- **Query Params**:  
  - `page`: Page number (optional).
- **Example**:  
  `GET /tweets?page=2`

### **List of Tweets by User**

- **Endpoint**: `GET /tweets/:username`
- **Example**:  
  `GET /tweets/example`

---

## 🖥️ Running Locally

If you want to run the project locally, follow the steps below:

1. Clone the repository:

    ```bash
    git clone https://github.com/seu-usuario/tweets-api.git
    ```

2. Install dependencies:

    ```bash
    cd tweets-api
    npm install
    ```

3. Run the project:

    ```bash
    npm start
    ```

The server will be available at `http://localhost:5000`.

---

## 📝 Future Improvements

- Implementar autenticação com JWT para maior segurança.
- Adicionar suporte para editar e deletar tweets.
- Melhorar a validação dos dados de entrada.

---

## 👤 Developer

Desenvolvido por [Luiz Fernando](https://github.com/luuizfernando). Feel free to get in touch and contribute to the project!

---

## 📫 Contato

- **Email:** [luizfernandosant26@gmail.com](mailto:luizfernandosant26@gmail.com)
- **LinkedIn:** [linkedin.com/in/luiz-fernando-dalpra](https://linkedin.com/in/luiz-fernando-dalpra)
