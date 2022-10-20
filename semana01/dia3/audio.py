from gtts import gTTS
import os

tts = gTTS(text='hello world python',lang='en')
filename ='hello.mp3'
tts.save(filename)
os.system(f"start {filename}")