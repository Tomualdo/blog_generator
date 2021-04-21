---
title: cURL
description: tips to remember
date: 2021-04-20
tags: curl tips
---
# cURL - tips to remember

Although cURL can be used with many different protocols, during its lifetime HTTP was one of the most frequently used ones. Here are some useful tips to remember.


1. Dont specify anything and just `GET` the page.

	```bash
	curl http://example.com
	```

2. Its too much, I just want the `HEAD`.

	```bash
	curl -I http://example.com
	```

3. On the second hand, Ive decided to `POST` stuff.

	```bash
	curl -d 'fname=jon&lname=doe' http://example.com 
	```

4. Wait, wait, lets `PUT` those cards on table.

	```bash
	curl -d 'fname= jonathan' -X PUT http://example.com
	```

	> If you want to change methods use `-X` or `--request`, e.g. sending a `PUT` instead `POST`.

	
5. On the other hand, Ive got a `file` for you.

	```bash
	curl -T uploadme http://example.com
	```

	or   

	```bash
	curl --data '@uploadme' http://example.com/newfilename
	```

	or (to be fancier)

	```bash
	cat uploadme | curl --data '@-' http://example.com/newfilename
	```

6. What if I need to pass a `custom HEADER`?

	```bash
	curl -H 'X-First-Name: Jon' http://example.com
	```

	or

	```bash
	curl -d '{json}' -H 'Content-Type: application/json' http://example.com
	```

7. To specify `URL path`.

	```bash
	curl --path-as-is http://example.com/x/../y/
	```

	> Dont squash sequences of /../ or /./ in the given URL path
	
8. On some basic `login` use.

	```bash
	curl -u admin:secret http://example.com
	```

	> Capital -U is used for `proxy` authentication.

	
9. Getting some `Cookie`.

	```bash
	curl -c cookie.txt http://example.com
	```

10. Getting some `Cookie` back.

	```bash
	curl -b cookie.txt http://example.com
	```

	Tip Cookie file format
	  _cURL uses a cookie format called **Netscape**, which each line is a single piece of information_  
	  _represented by following fields (read from left-to-right):_  

	  | domain | flag | path |secure | expiration | name | value |
	  | :------------: | :------: | :------: | :--------------------: | :-------------: | :-----------: | :------------: |
	  | .netscape.com | | | TRUE /  FALSE | 946684799 | NETSCAPE_ID | 100103 |
	
11. Just `download` the file.

	```bash
	curl -o file http://example.com/file.html
	```

	> The upper-case `-O` will create a file named like on the remote server.

	
12. Fill the form and submit.

	```bash
	curl -F 'fname=john' -F 'lname=doe' http://example.com/form-submit
	```

13. When you need `redirected`.

	```bash
	curl -L http://example.com 
	```

14. Do you support HTTP/2 or HTTP/3?

	```bash
	curl --http2 http://example.com
	curl --http3 https://example.com
	```

	> HTTP/3 needs to be explicity enabled during build process. Please refer to this [upgrade](https://github.com/curl/curl/blob/master/docs/HTTP3.md) guide if you want to play with it.

	
15. Forgotten little gem.

	```bash
	curl -w 'Type:%{content_type}\nCode:%{response_code}\n' -I -L https://google.com
	```

	> Writes out information after transfer has completed by using a special %{variable}
	
---
	
Tip (HTTP response Codes)
    : The first digit of a HTTP response defines the error group:
    
- 1xx: informational
- 2xx: success
- 3xx: redirections
- 4xx: client-side errors
- 5xx: server-side errors
