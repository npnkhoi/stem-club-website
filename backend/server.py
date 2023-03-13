from flask import Flask

app = Flask(__name__)

@app.route("/members")
def members():
    # TODO: add members' data
    return {"members": ["Member 1", "Member 2"]}

if __name__ == "__main__":
    app.run(debug=True)