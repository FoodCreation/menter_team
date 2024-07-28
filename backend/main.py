from fastapi import FastAPI, HTTPException
from pydantic import BaseModel
import requests
from recommender import get_recommendation

app = FastAPI()


class RecommendationRequest(BaseModel):
    hunger_level: int
    food_type: str


@app.get("/")
def read_root():
    return {"message": "Welcome to the Food Recommendation API"}


@app.post("/recommend")
def recommend(request: RecommendationRequest):
    try:
        prompt = f"空腹度は{request.hunger_level}で、ジャンル{request.food_type}でおすすめの料理を教えてください。口調は端的かつ愉快でお願いします。"
        recommendation = get_recommendation(prompt)
        return recommendation
    except requests.RequestException as e:
        raise HTTPException(status_code=500, detail=str(e))