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
      classifiers=[
        'Development Status :: 3 - Alpha',
        'Programming Language :: Python :: 2.7',
      ],
      keywords='fibonacci',
      license='<%= moduleLicense %>'
      packages=find_packages()
    )
