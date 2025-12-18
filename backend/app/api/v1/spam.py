from fastapi import APIRouter

router = APIRouter()

@router.get("/spam-numbers")
def spam_numbers():
    return {
        "numbers": [
            {"number": "+918888888888", "tag": "Spam"},
            {"number": "+919999999999", "tag": "Fraud"},
        ]
    }
