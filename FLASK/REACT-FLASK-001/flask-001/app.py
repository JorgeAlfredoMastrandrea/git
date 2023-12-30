from flask import Flask, jsonify
from flask_cors import CORS  # Importa la extensión
import random

app = Flask(__name__)
CORS(app)  # Habilita CORS para toda la aplicación

@app.route('/api/ejecutar-funcion', methods=['GET'])
def ejecutar_funcion():
    # Tu lógica de Python aquí
    mensage = 'este es un mensage desde python ejecutandose en el servidor con un numero al azar....' + str(random.randint(3, 9))
    resultado = {'mensaje': mensage  }
    return jsonify(resultado)

if __name__ == '__main__':
    app.run(debug=True)
