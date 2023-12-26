from typing import List

import uvicorn

from fastapi import Depends, FastAPI, HTTPException, Request, status, UploadFile, File
from fastapi.middleware.cors import CORSMiddleware
from fastapi.responses import HTMLResponse, JSONResponse, RedirectResponse, FileResponse
from sqlalchemy.orm import Session

"""
Misc setup for the server

"""

db_models.Base.metadata.create_all(bind=engine)

app = FastAPI()

# Dependency
def get_db():
    db = SessionLocal()
    try:
        yield db
    finally:
        db.close()

origins = ["*"]

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"]
)

"""
Routes are defined in this section.

"""

@app.get("/", status_code=307, response_class=RedirectResponse, tags={"Setup"})
def root():
    return RedirectResponse(url="/docs")


# Accept image from frontend
@app.post("/image", tags={"Image"})
async def upload_image(image: UploadFile = File(...)):
    # Process the uploaded image here
    # You can access the image using `file.file` and perform any necessary operations
    # Return the response accordingly
    image

    return {"filename": image.filename}



"""
To start the server, run the following command in the terminal:

> uvicorn server:app --reload

This line of code does the same.

"""
if __name__ == "__main__":
    uvicorn.run(app="server:app", host="127.0.0.1", port=8000, reload=True)