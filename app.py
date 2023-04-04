from flask import Flask, render_template
import datetime

app = Flask(__name__)

# Fake blog posts data
posts = [
    {
        'id': 1,
        'title': 'The LLM Revolution',
        'description': 'The rise of LLMs is ushering in a new era of software engineering',
        'content': """Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec id diam elementum ipsum porta facilisis. Maecenas orci odio, laoreet vel lobortis eu, imperdiet ut neque. In id mollis nisl. Maecenas pellentesque sem elit, sed hendrerit ex blandit eget. Nam lorem elit, pretium vel imperdiet ut, sodales cursus sem. Nam tincidunt laoreet pulvinar. Donec vitae pulvinar massa. Pellentesque vel felis vehicula sapien vehicula semper. Nunc vitae malesuada felis, vitae lobortis nisi. Proin vel bibendum arcu, sed iaculis arcu. Sed a eleifend sem, vitae rutrum nunc. Nam lacinia, elit ac lobortis facilisis, leo est viverra massa, a molestie erat ipsum non est. Praesent sagittis augue ac justo tempor aliquet vel et purus. Suspendisse ut pulvinar sem. Ut eget tristique massa. Aliquam ligula nunc, sollicitudin vitae sollicitudin a, elementum id nunc. Sed egestas magna vitae risus accumsan, vitae sollicitudin nulla pretium. Duis vitae cursus lectus, sit amet ultrices lacus. Duis at purus nec lorem lobortis tempus quis porta purus. Etiam a nisi mollis, eleifend felis id, lobortis quam. Ut egestas sem velit, quis vestibulum tellus molestie quis. Morbi volutpat felis eu viverra ullamcorper. Pellentesque vehicula ultricies justo, at iaculis mauris aliquet vel. Vestibulum eget velit sit amet magna dignissim commodo sed et turpis. Nunc fringilla vehicula laoreet. Nulla ut magna molestie, egestas dolor ac, sagittis augue. Sed rutrum mollis justo, a sagittis velit lobortis et. Morbi tellus odio, mollis a luctus et, cursus id massa. Mauris volutpat tincidunt sem, a pellentesque eros euismod eget. Pellentesque sit amet eros in dui volutpat blandit. Maecenas in odio egestas, maximus metus quis, auctor libero. Ut pellentesque, neque vel scelerisque lacinia, libero justo dapibus sapien, sit amet tempor odio tortor sit amet velit. Donec viverra pellentesque odio vel mollis. Duis scelerisque massa eget magna tristique consectetur. Donec tellus odio, facilisis vel tempor eget, scelerisque sit amet elit. Sed sit amet leo purus. Suspendisse potenti. Aliquam erat volutpat. Morbi non nunc placerat, elementum metus et, mollis orci. Aenean vitae eros eu neque viverra finibus. Maecenas sed sollicitudin odio. Duis dapibus sed ligula ut tincidunt. Suspendisse vel auctor nulla. Ut rhoncus nunc nisl, et venenatis leo scelerisque eu. Suspendisse potenti. Donec varius metus non faucibus porta. Quisque lacinia nunc at eros tincidunt, vel fermentum dolor viverra. Sed posuere ipsum sit amet odio dictum, id pretium nisl placerat. Nulla mollis ante urna, gravida bibendum nunc sagittis eget. Quisque erat tellus, mollis at leo vel, pulvinar dignissim odio. Nam bibendum accumsan turpis, vitae convallis urna dapibus id. Etiam sed scelerisque dolor. Nam et euismod dolor. Phasellus et metus non augue cursus malesuada. Pellentesque vulputate lobortis tincidunt.""",
        'image': 'https://via.placeholder.com/120'
    },
    {
        'id': 2,
        'title': 'Another Example Article',
        'description': 'Description example for the above article',
        'content': """Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec id diam elementum ipsum porta facilisis. Maecenas orci odio, laoreet vel lobortis eu, imperdiet ut neque. In id mollis nisl. Maecenas pellentesque sem elit, sed hendrerit ex blandit eget. Nam lorem elit, pretium vel imperdiet ut, sodales cursus sem. Nam tincidunt laoreet pulvinar. Donec vitae pulvinar massa. Pellentesque vel felis vehicula sapien vehicula semper. Nunc vitae malesuada felis, vitae lobortis nisi. Proin vel bibendum arcu, sed iaculis arcu. Sed a eleifend sem, vitae rutrum nunc. Nam lacinia, elit ac lobortis facilisis, leo est viverra massa, a molestie erat ipsum non est. Praesent sagittis augue ac justo tempor aliquet vel et purus. Suspendisse ut pulvinar sem. Ut eget tristique massa. Aliquam ligula nunc, sollicitudin vitae sollicitudin a, elementum id nunc. Sed egestas magna vitae risus accumsan, vitae sollicitudin nulla pretium. Duis vitae cursus lectus, sit amet ultrices lacus. Duis at purus nec lorem lobortis tempus quis porta purus. Etiam a nisi mollis, eleifend felis id, lobortis quam. Ut egestas sem velit, quis vestibulum tellus molestie quis. Morbi volutpat felis eu viverra ullamcorper. Pellentesque vehicula ultricies justo, at iaculis mauris aliquet vel. Vestibulum eget velit sit amet magna dignissim commodo sed et turpis. Nunc fringilla vehicula laoreet. Nulla ut magna molestie, egestas dolor ac, sagittis augue. Sed rutrum mollis justo, a sagittis velit lobortis et. Morbi tellus odio, mollis a luctus et, cursus id massa. Mauris volutpat tincidunt sem, a pellentesque eros euismod eget. Pellentesque sit amet eros in dui volutpat blandit. Maecenas in odio egestas, maximus metus quis, auctor libero. Ut pellentesque, neque vel scelerisque lacinia, libero justo dapibus sapien, sit amet tempor odio tortor sit amet velit. Donec viverra pellentesque odio vel mollis. Duis scelerisque massa eget magna tristique consectetur. Donec tellus odio, facilisis vel tempor eget, scelerisque sit amet elit. Sed sit amet leo purus. Suspendisse potenti. Aliquam erat volutpat. Morbi non nunc placerat, elementum metus et, mollis orci. Aenean vitae eros eu neque viverra finibus. Maecenas sed sollicitudin odio. Duis dapibus sed ligula ut tincidunt. Suspendisse vel auctor nulla. Ut rhoncus nunc nisl, et venenatis leo scelerisque eu. Suspendisse potenti. Donec varius metus non faucibus porta. Quisque lacinia nunc at eros tincidunt, vel fermentum dolor viverra. Sed posuere ipsum sit amet odio dictum, id pretium nisl placerat. Nulla mollis ante urna, gravida bibendum nunc sagittis eget. Quisque erat tellus, mollis at leo vel, pulvinar dignissim odio. Nam bibendum accumsan turpis, vitae convallis urna dapibus id. Etiam sed scelerisque dolor. Nam et euismod dolor. Phasellus et metus non augue cursus malesuada. Pellentesque vulputate lobortis tincidunt.""",
        'image': 'https://via.placeholder.com/120'
    },
    {
        'id': 3,
        'title': 'Last Example Post',
        'description': 'Final example description for the fake posts',
        'content': """Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec id diam elementum ipsum porta facilisis. Maecenas orci odio, laoreet vel lobortis eu, imperdiet ut neque. In id mollis nisl. Maecenas pellentesque sem elit, sed hendrerit ex blandit eget. Nam lorem elit, pretium vel imperdiet ut, sodales cursus sem. Nam tincidunt laoreet pulvinar. Donec vitae pulvinar massa. Pellentesque vel felis vehicula sapien vehicula semper. Nunc vitae malesuada felis, vitae lobortis nisi. Proin vel bibendum arcu, sed iaculis arcu. Sed a eleifend sem, vitae rutrum nunc. Nam lacinia, elit ac lobortis facilisis, leo est viverra massa, a molestie erat ipsum non est. Praesent sagittis augue ac justo tempor aliquet vel et purus. Suspendisse ut pulvinar sem. Ut eget tristique massa. Aliquam ligula nunc, sollicitudin vitae sollicitudin a, elementum id nunc. Sed egestas magna vitae risus accumsan, vitae sollicitudin nulla pretium. Duis vitae cursus lectus, sit amet ultrices lacus. Duis at purus nec lorem lobortis tempus quis porta purus. Etiam a nisi mollis, eleifend felis id, lobortis quam. Ut egestas sem velit, quis vestibulum tellus molestie quis. Morbi volutpat felis eu viverra ullamcorper. Pellentesque vehicula ultricies justo, at iaculis mauris aliquet vel. Vestibulum eget velit sit amet magna dignissim commodo sed et turpis. Nunc fringilla vehicula laoreet. Nulla ut magna molestie, egestas dolor ac, sagittis augue. Sed rutrum mollis justo, a sagittis velit lobortis et. Morbi tellus odio, mollis a luctus et, cursus id massa. Mauris volutpat tincidunt sem, a pellentesque eros euismod eget. Pellentesque sit amet eros in dui volutpat blandit. Maecenas in odio egestas, maximus metus quis, auctor libero. Ut pellentesque, neque vel scelerisque lacinia, libero justo dapibus sapien, sit amet tempor odio tortor sit amet velit. Donec viverra pellentesque odio vel mollis. Duis scelerisque massa eget magna tristique consectetur. Donec tellus odio, facilisis vel tempor eget, scelerisque sit amet elit. Sed sit amet leo purus. Suspendisse potenti. Aliquam erat volutpat. Morbi non nunc placerat, elementum metus et, mollis orci. Aenean vitae eros eu neque viverra finibus. Maecenas sed sollicitudin odio. Duis dapibus sed ligula ut tincidunt. Suspendisse vel auctor nulla. Ut rhoncus nunc nisl, et venenatis leo scelerisque eu. Suspendisse potenti. Donec varius metus non faucibus porta. Quisque lacinia nunc at eros tincidunt, vel fermentum dolor viverra. Sed posuere ipsum sit amet odio dictum, id pretium nisl placerat. Nulla mollis ante urna, gravida bibendum nunc sagittis eget. Quisque erat tellus, mollis at leo vel, pulvinar dignissim odio. Nam bibendum accumsan turpis, vitae convallis urna dapibus id. Etiam sed scelerisque dolor. Nam et euismod dolor. Phasellus et metus non augue cursus malesuada. Pellentesque vulputate lobortis tincidunt.""",
        'image': 'https://via.placeholder.com/120'
    }
]

@app.route('/')
def index():
    year = datetime.datetime.now().year
    return render_template('index.html', posts=posts, year=year)

@app.route('/post/<int:post_id>')
def post(post_id):
    post = next((p for p in posts if p['id'] == post_id), None)
    if post:
        year = datetime.datetime.now().year
        return render_template('article.html', post=post, year=year)
    else:
        return "Post not found", 404

if __name__ == '__main__':
    app.run(port=8000)