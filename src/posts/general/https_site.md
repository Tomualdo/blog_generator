---
title: Enable HTTPS
description: Enable HTTPS on Apache with self-signed certificate
date: 2021-04-18
tags: https apache
---
# Enable HTTPS on Apache with self-signed certificate

 - Install the Apache server and the required packages
```bash
apt-get update
apt-get install apache2 openssl
```
 - Enable Apache module named: `Mod_ssl` and `Mod_rewrite`.

```bash
a2enmod ssl
a2enmod rewrite
```

 - Edit the Apache configuration file.
```bash
vi /etc/apache2/apache2.conf
```

 - Add the following lines at the end of this file.
```bash
<Directory /var/www/html>
AllowOverride All
</Directory>
```

 - Create a private key and the website certificate using the OpenSSL command.
```bash
mkdir /etc/apache2/certificate
cd /etc/apache2/certificate
openssl req -new -newkey rsa:4096 -x509 -sha256 -days 365 -nodes -out apache-certificate.crt -keyout apache.key
```

 - Enter the requested information.
```bash
Generating a RSA private key
............++++
.......................................................++++
writing new private key to 'apache.key'
-----
You are about to be asked to enter information that will be incorporated
into your certificate request.
What you are about to enter is what is called a Distinguished Name or a DN.
There are quite a few fields but you can leave some blank
For some fields there will be a default value,
If you enter '.', the field will be left blank.
-----
Country Name (2 letter code) [AU]:BR
State or Province Name (full name) [Some-State]:Rio de Janeiro
Locality Name (eg, city) []:
Organization Name (eg, company) [Internet Widgits Pty Ltd]:TechExpert
Organizational Unit Name (eg, section) []:
Common Name (e.g. server FQDN or YOUR name) []:200.200.200.200
Email Address []:
```
 - On the option named `COMMON_NAME`, you need to enter the IP _address_ or _hostname_.
 - In our example, we used the IP address 200.200.200.2000.
 
 - Edit the Apache configuration file for the default website.
```bash
vi /etc/apache2/sites-enabled/000-default.conf
```

 - Here is the file, before our configuration.
```bash
<VirtualHost *:80>
        ServerAdmin webmaster@localhost
        DocumentRoot /var/www/html
        ErrorLog ${APACHE_LOG_DIR}/error.log
        CustomLog ${APACHE_LOG_DIR}/access.log combined
</VirtualHost>
```
 - Here is the file, after our configuration.
```bash
<VirtualHost *:443>
        ServerAdmin webmaster@localhost
        DocumentRoot /var/www/html
        ErrorLog ${APACHE_LOG_DIR}/error.log
        CustomLog ${APACHE_LOG_DIR}/access.log combined
        SSLEngine on
        SSLCertificateFile /etc/apache2/certificate/apache-certificate.crt
        SSLCertificateKeyFile /etc/apache2/certificate/apache.key
</VirtualHost>
```

 - Optionally, you may want to redirect HTTP users to the HTTPS version of your website.
 - In this case, use the following configuration.
```bash
<VirtualHost *:80>
        RewriteEngine On
        RewriteCond %{HTTPS} !=on
        RewriteRule ^/?(.*) https://%{SERVER_NAME}/$1 [R=301,L]
</virtualhost>
<VirtualHost *:443>
        ServerAdmin webmaster@localhost
        DocumentRoot /var/www/html
        ErrorLog ${APACHE_LOG_DIR}/error.log
        CustomLog ${APACHE_LOG_DIR}/access.log combined
        SSLEngine on
        SSLCertificateFile /etc/apache2/certificate/apache-certificate.crt
        SSLCertificateKeyFile /etc/apache2/certificate/apache.key
</VirtualHost>
```

 - Restart the Apache service.
```bash
service apache2 restart
```

 - Open your browser and access the HTTPS version of your website.
 - In our example, the following URL was entered in the Browser:
 • https://200.200.200.200
 - The Apache server will display the HTTPS version of your website.
