---
author: Sahil
pubDatetime: 2024-10-05T11:36:10.094Z
title: Linux Terminal for Beginners - Mastering Navigation Basics
slug: linux-terminal-for-beginners-mastering-navigation-basics
ogImage: "/assets/terminal-introduction.png"
featured: true
draft: false
tags:
  - terminal
  - linux
description: Learn how to navigate your digital space efficiently using the Linux terminal. Master the basics of terminal navigation with this beginner-friendly guide.
series:
  name: Linux Terminal
  order: 1
---



Imagine this: You've been using your computer for a while, and your Documents folder has become a catch-all for every file you've saved. You want to bring some order to this chaos, create a structure for your projects, and set up a system for personal files. Doing this with a mouse seems tedious. There must be a faster, more efficient way, right?

Enter the **terminal** --> your new friend for doing things faster. Before we start organizing, we need to learn how to navigate our digital space efficiently. This is where the power of the terminal really shines.

# What is a terminal?
Think of the terminal as a way to chat with the computer.
Instead of painfully clicking through folders, we can just ask the computer through the terminal to do exactly what we want.
The advantages are huge:
- Its often faster than using a mouse for many tasks
- It allows you to perform powerful operations not possible with normal clicking and dragging.

# Your First Step: Opening the Terminal
Let's start our organizational journey by opening the terminal:

- On Ubuntu: Press Ctrl + Alt + T
- On Mac: Press Cmd + Space, type "Terminal", press Enter
- On other Linux systems: Look for "Terminal" in your applications menu

When you open it, you'll see something like this:

![terminal-screenshot](@assets/images/terminal/introduction/terminal-screenshot.png)
There are 2 lines:
- First one is printing my last login time or using time
- The second line is important, it prints my username and my system's name in this format : `username@computername:~$`

This is your computer's way of saying, "I'm ready. What would you like me to do?"

# Talk to your Terminal

## Where am I? (`pwd`)

Before doing anything let's check where we are right now:

```shell
pwd
```

`pwd` stands for "Print Working Directory". This command shows you the full path of the directory (folder) you're currently in.

For me, it's looking like this:

![terminal-pwd-screenshot.png](@assets/images/terminal/introduction/terminal-pwd-screenshot.png)
It'll print something similar to this. Instead of my username, you'll see your username.

This is your home directory, where we'll start our organization.

## What's here? (`ls`)

Ok, we've understood where we are, but now let's find out what's in this directory (folder)
Think of it like relocating a new place, first you understood where you are, now you need to see what's the place has.

Type:
```shell
ls
```

This will list all the files and folders in your current location.

For me, it shows something like this:

![terminal-ls-screenshot](@assets/images/terminal/introduction/terminal-ls-screenshot.png)

Damn, I have too much garbage in here, you might see less things or you might have a lot of garbage like me.

You should see several folders, including Documents. We'll be working with this folder.

## Moving into a folder (`cd`)
Let's move into the Documents folder:

```shell
cd Documents
```

`cd` stands for "change directory". This command moves you into the specified folder.

This is how it looks for me:

![terminal-cd-screenshot.png](@assets/images/terminal/introduction/terminal-cd-screenshot.png)

## Checking our new location (pwd)
Let's confirm where we are now:
```shell
pwd
```

For me, its showing something like this:

![terminal-documents-pwd](@assets/images/terminal/introduction/terminal-documents-pwd-screenshot.png)

I have moved from my home directory to Documents directory, if you have followed along then you'll see the same thing.

## What's in Documents? (`ls`)
Let's see what's in the Documents folder:

```shell
ls
```

This will show you all the files and folders that have been piling up in your Documents folder.

For me, its something like this:

![terminal-ls-documents-screenshot.png](@assets/images/terminal/introduction/terminal-ls-documents-screenshot.png)
# Creating Our Organizational Structure
Now that we're in the Documents folder and can see its contents, let's start creating some order.

## Creating new folders (`mkdir`)
Let's create two new folders to separate our projects and personal files:

```shell
mkdir Projects
mkdir Personal
```

`mkdir` stands for "make directory". This command creates a new folder with the name you specify.

## Verifying our new folders (`ls`)

Let's check if our new folders were created:

```shell
ls
```

You should now see Projects and Personal listed, along with your existing files and folders.

For me, its something like this:

![terminal-mkdir-ls-screenshot](@assets/images/terminal/introduction/terminal-mkdir-ls-screenshot.png)

I have too many folders but you can see we have successfully created "Personal" and "Projects" folder.

# Moving Between Folders
Now that we have our basic structure, let's practice moving around.

## Moving into a subfolder (`cd`)

Let's move into the Projects folder:

```shell
cd Projects
```

## Checking our location (`pwd`)
Confirm where we are:
```shell
pwd
```

This is how it looks for me:

![terminal-projects-pwd-screenshot.png](@assets/images/terminal/introduction/terminal-projects-pwd-screenshot.png)
## Going back up (`cd ..`)
To get back to the parent folder (Documents in this case):

```shell
cd ..
```


`cd ..` moves you up one level in the directory structure.

## Returning home (`cd`)
To go back to your home directory from anywhere:

```shell
cd
```

`cd` without any arguments takes you back to your home directory.

# Practice Mission

Try this short mission to practice what you've learned:

1. Open the terminal
2. Navigate to your Documents folder
3. Create a new folder called "Hobbies"
4. Move into the Hobbies folder
5. Check your current location
6. Move back to the Documents folder
7. List the contents to verify your new folder is there
8. Return to your home directory

Remember, every master was once a beginner. Don't be afraid to experiment – that's how you learn and grow your skills!

# Show Off Your New Terminal Skills!

You've just taken your first steps into a larger world. How about we celebrate this milestone together?

If you've completed the practice mission (and even if you're still working on it), why not share your progress? It's a great way to track your learning journey and might even inspire others to start their own terminal adventure!

Here's what you can do:

1. Take a screenshot of your terminal showing off your new skills
2. Post it on Twitter or LinkedIn
3. Tag me (@introvertedbot on Twitter)

I'll be keeping an eye out to give you a well-deserved shoutout. Plus, who knows? Your post might just encourage another future terminal wizard to take the plunge!

Remember, every command you type is a step towards mastering the terminal. Let's celebrate each step together!

In our next lesson, we'll learn how to move your existing files into this new organizational structure we've created. We'll bring order to that digital chaos, all from the command line! Stay tuned, and keep practicing those navigation skills!
