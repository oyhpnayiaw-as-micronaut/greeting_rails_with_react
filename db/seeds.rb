messages = [
  'Hello',
  'Nice to meet you',
  'How are you?',
  "I'm fine, thanks",
  "What's your name?"
]

messages.each do |message|
  Greeting.create(message:)
end
