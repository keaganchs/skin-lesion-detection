from fastapi import File

def process_image(image: File) -> dict:
    """
    Description: Process an image and return the result

    Parameters: 
        image (File): The image to process

    Returns:
        (dict): The result of processing the image
    
    """
    # Pass image to model

    # Return result

    return {"result": "You have cancer",
            "confidence": "0.99"} 