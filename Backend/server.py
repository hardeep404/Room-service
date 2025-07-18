from flask import Flask, request
from flask_cors import CORS

app = Flask(__name__)
CORS(app)  

@app.route("/update-section", methods=["POST"])
def log_edit():
    data = request.get_json()
    component = data.get("component")
    field = data.get("field")
    value = data.get("value")
    style = data.get("style")

    print("FRONTEND EDIT DETECTED")
    print(f"Component: {component}")
    print(f"Field: {field}")
    print(f"Value: {value}")
    print(f"Style: {style}")

    return {"status": "success", "message": "Changes received."}, 200

if __name__ == "__main__":
    app.run(debug=True)
