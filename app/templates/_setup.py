from setuptools import setup, find_packages

def readme():
    with open('README.rst') as f:
        return f.read()

setup(name='<%= moduleName %>',
      description=readme(),
      version='<%= moduleVersion %>',
      author='<%= moduleAuthor %>',
      author_email='<%= moduleAuthorEmail %>',
      url='<%= moduleURL %>',
      license='<%= moduleLicense %>',
      <% if (addCommandline) { %>entry_points = { 
        'console_scripts': ['<%= moduleName %>=<%= moduleName %>.command_line:main']
      },<% } %>
      packages=find_packages()
    )
