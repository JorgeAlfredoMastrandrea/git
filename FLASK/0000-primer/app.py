from flask import Flask, jsonify
from flask_cors import CORS  # Importa la extensión

app = Flask(__name__)
CORS(app)  # Habilita CORS para toda la aplicación

@app.route('/api/ejecutar-funcion', methods=['GET'])
def ejecutar_funcion():
    # Tu lógica de Python aquí
    resultado = {'mensaje': 'Hola  Noe....'}
    return jsonify(resultado)

if __name__ == '__main__':
    app.run(debug=True)
