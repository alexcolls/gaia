from keys.key import API_KEY
import openai


def davinci(prompt, _api_key=API_KEY):
    openai.api_key = _api_key
    res = openai.Completion.create(
        engine='text-davinci-003',
        prompt=prompt,
        max_tokens=1024,
        n=1,
        stop=None,
        temperature=0.5,
    )
    chatGPTtxt = res.choices[0].text
    return chatGPTtxt
