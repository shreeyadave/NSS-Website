import React, { useEffect, useState } from "react";
import Layout from "../Layout/Layout";
import ReactMarkdown from "react-markdown";

import { useParams } from "react-router-dom";
import { collection, query, where, getDoc, doc } from "@firebase/firestore";
import { firestore } from "../../firebase";
import remarkGfm from "remark-gfm";
import { Box, Stack } from "@mui/material";

const md = `
![cover](https://www.digitalocean.com/_next/static/media/intro-to-cloud.d49bc5f7.jpeg)

An h1 header
============
Paragraphs are separated by a blank line.

2nd paragraph. *Italic*, **bold**, and monospace. Itemized lists
look like:

  * this one
  * that one
  * the other one

Note that --- not considering the asterisk --- the actual text
content starts at 4-columns in.

> Block quotes are
> written like so.
>
> They can span multiple paragraphs,
> if you like.

Use 3 dashes for an em-dash. Use 2 dashes for ranges (ex., "it's all
in chapters 12--14"). Three dots ... will be converted to an ellipsis.
Unicode is supported. ☺



An h2 header
------------
![image](https://media.nomadicmatt.com/currentfave.jpg)

Here's a numbered list:

 1. first item
 2. second item
 3. third item

Note again how the actual text starts at 4 columns in (4 characters
from the left side). Here's a code sample:

    # Let me re-iterate ...
    for i in 1 .. 10 { do-something(i) }

As you probably guessed, indented 4 spaces. By the way, instead of
indenting the block, you can use delimited blocks, if you like:

~~~
define foobar() {
    print "Welcome to flavor country!";
}
~~~

(which makes copying & pasting easier). You can optionally mark the
delimited block for Pandoc to syntax highlight it:

~~~python
import time
# Quick, count to ten!
for i in range(10):
    # (but not *too* quick)
    time.sleep(0.5)
    print i
~~~



### An h3 header ###

Now a nested list:

 1. First, get these ingredients:

      * carrots
      * celery
      * lentils

 2. Boil some water.

 3. Dump everything in the pot and follow
    this algorithm:

        find wooden spoon
        uncover pot
        stir
        cover pot
        balance wooden spoon precariously on pot handle
        wait 10 minutes
        goto first step (or shut off burner when done)

    Do not bump wooden spoon or it will fall.

Notice again how text always lines up on 4-space indents (including
that last line which continues item 3 above).

Here's a link to [a website](http://foo.bar), to a [local
doc](local-doc.html), and to a [section heading in the current
doc](#an-h2-header). Here's a footnote [^1].

[^1]: Footnote text goes here.

Tables can look like this:

size  material      color
----  ------------  ------------
9     leather       brown
10    hemp canvas   natural
11    glass         transparent

Table: Shoes, their sizes, and what they're made of

(The above is the caption for the table.) Pandoc also supports
multi-line tables:

--------  -----------------------
keyword   text
--------  -----------------------
red       Sunsets, apples, and
          other red or reddish
          things.

green     Leaves, grass, frogs
          and other things it's
          not easy being.
--------  -----------------------

A horizontal rule follows.

***

Here's a definition list:

apples
  : Good for making applesauce.
oranges
  : Citrus!
tomatoes
  : There's no "e" in tomatoe.

Again, text is indented 4 spaces. (Put a blank line between each
term/definition pair to spread things out more.)

Here's a "line block":

| Line one
|   Line too
| Line tree

and images can be specified like so:

![example image](example-image.jpg "An exemplary image")

Inline math equations go in like so: $\omega = d\phi / dt$. Display
math should get its own line and be put in in double-dollarsigns:

$$I = \int \rho R^{2} dV$$

And note that you can backslash-escape any punctuation characters
which you wish to be displayed literally, ex.: \`foo\`, \*bar\*, etc.`;
const md2 = `# My Amazing Travel Adventure

![cover](https://www.digitalocean.com/_next/static/media/intro-to-cloud.d49bc5f7.jpeg)

I recently embarked on an incredible travel adventure to explore the hidden gems of the world. Let me take you on a journey to some breathtaking destinations!

## Destination 1: Paradise Island
---
Paradise Island truly lives up to its name. The pristine beaches, crystal-clear turquoise waters, and lush greenery make it a tropical paradise. I spent my days basking in the sun, snorkeling among colorful coral reefs, and enjoying delicious seafood.Next, I ventured into the majestic mountains. The towering peaks, snow-capped in all their glory, left me in awe. I hiked through picturesque trails, breathing in the fresh mountain air and immersing myself in the tranquility of nature.

## Destination 2: City of Lights
---
The vibrant city lights called me to explore the bustling streets and embrace the urban charm. Skyscrapers reaching for the sky, bustling markets, and mouthwatering street food made this city an unforgettable experience. I wandered through colorful alleys, discovering hidden gems at every turn. Finally, I found solace in the serene countryside. Rolling hills, picturesque landscapes, and charming villages welcomed me with open arms. I cycled through winding paths, savored farm-fresh produce, and connected with the warmth of the locals.

## Farewell for Now
---

As my incredible journey comes to an end, I reflect on the unforgettable memories I've made. The world is full of wonders, waiting to be explored. Until our next adventure, remember to embrace the unknown and let your wanderlust guide you.

Bon voyage!

`;

export default function Post() {
  const { id } = useParams();

  const [postData, setPostData] = useState({});

  useEffect(() => {
    getPost();
  }, []);

  const getPost = async () => {
    const docRef = doc(firestore, "posts", id);
    const docSnap = await getDoc(docRef);

    if (docSnap.exists()) {
      setPostData(docSnap.data());
      //   console.log("Document data:", docSnap.data());
    } else {
      // docSnap.data() will be undefined in this case
      console.log("No such document!");
    }
  };

  return (
    <Layout>
      <Stack alignItems={"center"}>
        <Box
          sx={{ fontFamily: "DM Sans", fontSize: "4em", width: "50%", py: 2 }}
        >
          {postData.title}
        </Box>
        <Box sx={{ width: "50%" }}>
          <ReactMarkdown className="md" remarkPlugins={[remarkGfm]}>
            {md}
          </ReactMarkdown>
        </Box>
      </Stack>
    </Layout>
  );
}
