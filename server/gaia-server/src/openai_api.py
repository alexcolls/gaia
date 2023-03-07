from keys.key import API_KEY
import openai

PROMPT = 'Tell me something'
openai.api_key = API_KEY

res = openai.Completion.create(
    engine='text-davinci-003',
    prompt=PROMPT,
    max_tokens=1024,
    n=1,
    stop=None,
    temperature=0.5,
)
chatGPTtxt = res.choices[0].text
print(chatGPTtxt)
