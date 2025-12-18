from fastapi import FastAPI
from app.api.v1.breach import router as breach_router
from app.api.v1.spam import router as spam_router

app = FastAPI(title="Protecto API", version="1.0")

app.include_router(breach_router, prefix="/v1")
app.include_router(spam_router, prefix="/v1")

@app.get("/health")
def health():
    return {"status": "ok"}
