---
layout: post
title: "New to 0.5: Cross-Platform Installer"
author: Shane McCormack
author_github: ShaneMcC
---
As part of our aim to make DMDirc into a good, cross-platform IRC Client, it was
decided early on that it required an actual installer to make
packaging/distributing/installing the client much easier.

Originally this was scheduled for 0.7, but just prior to the release of DMDirc
0.4 we rescheduled it to 0.5 and it was assigned to me (as I had the least other
tasks to do - the main bulk of the parser is complete).

So since we released 0.4, I have been working almost entirely on this, and can
happily say the first revision of the installer is completed.

One of the key requirements for the installer is that it should run on all the
(desktop) platforms that DMDirc runs on, which right now are Windows (2000, XP,
2003, Vista) and Linux.

Below are a few screen shots showing the installer running on XP (using both
Classic and Normal themes), and Windows Vista:

![Installer running on XP Pro - Normal Theme](/blog-assets/xp-normal.png)
![Installer running on XP Pro - Classic Theme](/blog-assets/xp-classic.png)
![Installer running on Vista](/blog-assets/vista.png)

Linux screenshots coming soon.

Mac users may note that there is no Mac Version of the installer. This is due to
the lack of availability of a Mac to test on, and the lack of a proper release
of Java 6 for OS X. I am hoping to have the installer running on the Mac for the
first release after Java 6 becomes available properly (although the lack of a
Mac for testing could make this awkward - donations welcome!)

At the moment the installer requires Java 6 to be installed on the machine
already. If the installer is ran on a machine without Java, or with a version
that is too old, it will notify (via console in Linux, or a dialog box on
Windows) the user that they need to install or update Java first. One of our
goals for DMDirc 0.6 is to produce a version of the installer that bundles Java
6, or can download it for the user.

<p style="font-size: 10px; font-style: italic">This section of the post assumes
you actually care about what I have to say about the installer and how it works.
I care, and I would enjoy reading this, but most people probably won't. Don't
read on if easily bored!</p>

First off is the main portion of the installer: the Java code that actually does
the installing. This is, of course, the same on all platforms (just
enabling/disabling bits that are not appropriate for the platform, etc) and is a
rather simple case of copying files from the temporary location they were
extracted to, to the location the user wants them to be, followed by
platform-specific code to create shortcuts to the files.

The real fun part of the installer is the platform-specific launcher code that
was developed for the task, this was my favourite part of the whole thing!

The Linux version of the installer is a special file, (installer.run) that has a
bash shell script at the top, and a TGZ file appended at the bottom. The first
thing the installer does is to MD5Check itself by cat'ing itself to md5sum (if
available) or alternatively running md5sum on installer.run.md5 if it is found,
once the check is complete (and is the same) the installer pipes the tgz part of
the file to gunzip and tar, and finally runs the installer. (To create the
installer, the reverse is done, the bash script part of the file is created,
then the files are tgz'd and cat'ed to the end, followed by the MD5 sum being
produced and added to the file)

The Windows part of the installer is slightly more complex, in part due to
Windows not having as nifty a thing as bash included by default. However this
was worked around. The front-end to the installer is a simple
freepascal-compiled exe that includes a 7zip self-extracting archive as an
RCDATA resource, which is then extracted and executed. The original launcher
terminates leaving the 7zip extractor "on its own". (The main/only purpose of
this exe is to brand the installer as DMDirc, not as 7zip, and in future to
check the MD5 sum of the 7zip extractor file). Once the files are extracted by
7zip, another exe (also freepascal, and cleverly dubbed "setup.exe") is
executed, this checks for the presence of Java, and attempts to run the
installer, alerting the user if it failed. This is slightly less interesting
than the Linux one, but I am still quite impressed that it works as well as it
does. (To create the installer, setup.exe is compiled, and then a .7z archive
is made of setup.exe and the other files that are needed, these are then bundled
with the 7zip self-extraction stub, leaving the file "extractor.exe". This is
then added along with the DMDirc icon to a resource file that is compiled into
installer.exe. The MD5 hash of extractor.exe is also included. The final exe
is then digitally signed before being made for download)

The actual process of creating the installers is all automated by four shell
scripts (release.sh, makeInstallerLinux.sh, makeInstallerWindows.sh,
makeLauncher.sh) and is done by using the commands

    ./release.sh 0.5

or

    ./release.sh trunk

This saves having to remember the processes required to produce the exes, and
makes releasing easy.

To produce the binaries above, the following command was used:

    ./release.sh -o "-t SVN_2030" trunk

The output of this command:

    ================================================================
    Removing existing releases from output directory
    ================================================================
    ================================================================
    Building Installer JAR
    ================================================================
    ================================================================
    Building linux installer
    ================================================================
    -----------
    Creating jar..
    Buildfile: build.xml

    -pre-init:

    -init-private:

    -init-user:

    -init-project:

    -init-macrodef-property:

    -do-init:

    -post-init:

    -init-check:

    -init-macrodef-javac:

    -init-macrodef-junit:

    -init-macrodef-nbjpda:

    -init-macrodef-debug:

    -init-macrodef-java:

    -init-presetdef-jar:

    init:

    deps-jar:

    -pre-pre-compile:
        [mkdir] Created dir: /home/shane/projects/dmdirc_google/trunk/build/classes

    -pre-compile:

    -do-compile:
        [javac] Compiling 507 source files to /home/shane/projects/dmdirc_google/trunk/build/classes
         [copy] Copying 61 files to /home/shane/projects/dmdirc_google/trunk/build/classes
         [copy] Copied 9 empty directories to 2 empty directories under /home/shane/projects/dmdirc_google/trunk/build/classes

    -post-compile:

    compile:

    -pre-jar:

    -pre-pre-jar:
        [mkdir] Created dir: /home/shane/projects/dmdirc_google/trunk/dist

    -do-jar-with-manifest:

    -do-jar-without-manifest:

    -do-jar-with-mainclass:

    -do-jar-with-libraries:
     [copylibs] Building jar: /home/shane/projects/dmdirc_google/trunk/dist/DMDirc.jar
         [echo] To run this application from the command line without Ant, try:
         [echo] java -jar "/home/shane/projects/dmdirc_google/trunk/dist/DMDirc.jar"

    -post-jar:

    jar:

    BUILD SUCCESSFUL
    Total time: 24 seconds
    Linking jar..
    Creating .run file
    Adding stub..
    Compressing files..
    DMDirc.jar
    setup.sh
    installer.jar
    icon.svg
    Adding MD5..
    SUM obtained is: 3a2ecaebf7fe6fae126692df8425af85
    Chmodding
    -----------
    Done.
    -----------
    ================================================================
    Building Windows installer
    ================================================================
    -----------
    Creating .7z file
    Linking jar..
    Setup.exe does not exist. Lets try and compile it.
    Free Pascal Compiler version 2.0.4 [2006/08/20] for i386
    Copyright (c) 1993-2006 by Florian Klaempfl
    Target OS: Win32 for i386
    Compiling Setup.dpr
    Linking Setup.exe
    181 Lines compiled, 3.5 sec
    DMDirc.jar  Launcher.dpr  makeInstallerWindows.sh  makeLauncher.sh  Setup.dpr  Setup.exe  Setup.o
    Compressing files..
    --01:27:30--  http://www.optimumx.com/download/Shortcut.zip
               => `Shortcut.zip'
    Resolving www.optimumx.com... 71.196.212.34
    Connecting to www.optimumx.com|71.196.212.34|:80... connected.
    HTTP request sent, awaiting response... 200 OK
    Length: 24,241 (24K) [application/x-zip-compressed]

    100%[===================================================================================================>] 24,241        --.--K/s

    01:27:32 (99.67 MB/s) - `Shortcut.zip' saved [24241/24241]


    7-Zip 4.43 beta  Copyright (c) 1999-2006 Igor Pavlov  2006-09-15
    p7zip Version 4.43 (locale=en_US.UTF-8,Utf16=on,HugeFiles=on,1 CPU)
    Scanning

    Creating archive /home/shane/projects/dmdirc_google/installer/windows/extractor.7z

    Compressing  DMDirc.jar
    Compressing  installer.jar
    Compressing  icon.ico
    Compressing  Shortcut.exe
    Compressing  Setup.exe

    Everything is Ok
    Creating config..
    Obtaining sfx stub..
    --01:27:40--  http://kent.dl.sourceforge.net/sourceforge/sevenzip/7z447_extra.tar.bz2
               => `7z447_extra.tar.bz2'
    Resolving kent.dl.sourceforge.net... 212.219.56.167
    Connecting to kent.dl.sourceforge.net|212.219.56.167|:80... connected.
    HTTP request sent, awaiting response... 200 OK
    Length: 441,492 (431K) [application/x-bzip2]

    100%[===================================================================================================>] 441,492      657.35K/s

    01:27:43 (655.88 KB/s) - `7z447_extra.tar.bz2' saved [441492/441492]

    7zS.sfx
    Creating .exe
    Building launcher
            Free Pascal Compiler version 2.0.4 [2006/08/20] for i386
    Copyright (c) 1993-2006 by Florian Klaempfl
    Target OS: Win32 for i386
    Compiling Launcher.dpr
    Compiling resource all.res
    Linking Launcher.exe
    79 Lines compiled, 2.6 sec
    Chmodding..
    Signing..
    -----------
    Done.
    -----------
    ================================================================
    Creating MD5SUM files
    ================================================================
    ================================================================
    Release ready - see output folder
    ================================================================

As you can see, the scripts do everything automatically, including downloading
the two extra files needed for windows (7zip sfx stub, and shortcut.exe)

That's about all I can think of to say about the installer, so feel free to try
and break it (and report any breakages as
[an issue on google code](http://code.google.com/p/dmdirc/issues/entry)).