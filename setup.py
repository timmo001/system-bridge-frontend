"""Setup."""
import os
from shutil import copytree

from setuptools import find_packages, setup

# Get setup packages from requirements.txt
with open("requirements_setup.txt", encoding="utf-8") as f:
    requirements_setup = f.read().splitlines()

# Get packages from requirements.txt
with open("requirements.txt", encoding="utf-8") as f:
    requirements = f.read().splitlines()

copytree(
    "out",
    "systembridgefrontend/out",
    dirs_exist_ok=True,
)

package_data = ["out/**/*"]

for root, _, files in os.walk("systembridgefrontend/out"):
    for filename in files:
        package_data.append(
            os.path.join(root, filename)
            .replace("\\", "/", -1)
            .replace("systembridgefrontend/", "")
        )

print(package_data)

setup(
    name="systembridgefrontend",
    description="System Bridge Frontend",
    keywords="system-bridge",
    author="Aidan Timson (Timmo)",
    author_email="aidan@timmo.dev",
    license="MIT",
    url="https://github.com/timmo001/system-bridge-frontend",
    packages=find_packages(exclude=["tests", "generator"]),
    package_data={"": package_data},
    install_requires=requirements,
    setup_requires=requirements_setup,
    use_incremental=True,
)
