DEBUG=True # change this to False in production
SECRET_KEY = 'xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx'

# SOCIAL AUTH KEYS
SOCIAL_AUTH_TWITTER_KEY = 'xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx'
SOCIAL_AUTH_TWITTER_SECRET = 'xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx'

#http://psa.matiasaguirre.net/docs/backends/github.html?highlight=github
SOCIAL_AUTH_GITHUB_KEY = 'xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx'
SOCIAL_AUTH_GITHUB_SECRET = 'xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx'
SOCIAL_AUTH_GITHUB_SCOPE = ["repo","user"]

# http://psa.matiasaguirre.net/docs/backends/google.html?highlight=google
SOCIAL_AUTH_GOOGLE_OAUTH2_KEY = 'xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx'
SOCIAL_AUTH_GOOGLE_OAUTH2_SECRET = 'xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx'
#SOCIAL_AUTH_GOOGLE_OAUTH_SCOPE = [...]
SOCIAL_AUTH_GOOGLE_OAUTH2_AUTH_EXTRA_ARGUMENTS = {
          'access_type': 'offline',
          'approval_prompt': 'auto'
      }

OPBEAT = {

    'ORGANIZATION_ID': 'xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx',
    'APP_ID': 'xxxxxxxxx',
    'SECRET_TOKEN': 'xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx',
}

SOCIAL_AUTH_SAML_SP_ENTITY_ID = "your-app-id"

# Generated with openssl req -new -x509 -days 3652 -nodes -out saml.crt -keyout saml.key
SOCIAL_AUTH_SAML_SP_PUBLIC_CERT=''''xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx''''

SOCIAL_AUTH_SAML_SP_PRIVATE_KEY=''''xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx''''
SOCIAL_AUTH_SAML_ORG_INFO= {
                              "en-US": {
                                           "name": "organization-name",
                                           "displayname": "Organization Name",
                                           "url": "https://organization.site",
                                         }
                           }

SOCIAL_AUTH_SAML_TECHNICAL_CONTACT={"givenName": "Mickey Mouse", "emailAddress": "your@email.com"}
SOCIAL_AUTH_SAML_SUPPORT_CONTACT=SOCIAL_AUTH_SAML_TECHNICAL_CONTACT

SOCIAL_AUTH_SAML_ENABLED_IDPS={"stanford": {
                               "entity_id": "https://idp.stanford.edu/",
                               "url": "https://idp.stanford.edu/idp/profile/SAML2/Redirect/SSO",
                               "x509cert": '''xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx''',
    }
}
