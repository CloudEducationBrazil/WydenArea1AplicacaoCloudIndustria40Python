from flask import Flask, request, jsonify
from datetime import datetime
from flask_cors import CORS

app = Flask(__name__)
CORS(app)

# Lista para armazenar os posts
posts = []

# Rota para criar um novo post
@app.route('/post', methods=['POST'])
def create_post():
    # Obtém os dados do post do corpo da requisição
    post_data = request.get_json()
    autor = post_data['autor']
    estado = post_data['estado']
    cidade = post_data['cidade']
    email = post_data['email']
    titulo = post_data['titulo']
    descricao = post_data['descricao']
    data_atual = datetime.now().strftime('%Y-%m-%d %H:%M:%S')

    # Cria um novo dicionário para representar o post
    post = {
        'autor': autor,
        'estado': estado,
        'cidade': cidade,
        'email': email,
        'titulo': titulo,
        'descricao': descricao,
        'data_atual': data_atual
    }

    # Adiciona o post à lista de posts
    posts.append(post)

    return jsonify({'mensagem': 'Post criado com sucesso!'})

# Rota para listar todos os posts
@app.route('/posts', methods=['GET'])
def get_posts():
    return jsonify({'posts': posts})

if __name__ == '__main__':
    app.run(debug=True)
