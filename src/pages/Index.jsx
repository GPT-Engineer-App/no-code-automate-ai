import { Container, Box, Heading, Text, VStack, HStack, IconButton, Image, Link } from "@chakra-ui/react";
import { FaTwitter, FaLinkedin, FaGithub } from "react-icons/fa";

const blogPosts = [
  {
    title: "The Rise of No-Code Tools",
    date: "October 1, 2023",
    excerpt: "No-code tools are revolutionizing the way we build applications. Learn how you can leverage these tools to build powerful solutions without writing a single line of code.",
    image: "https://images.unsplash.com/photo-1581091224003-01e7c2e69f6f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxubyUyMGNvZGUlMjB0b29sc3xlbnwwfHx8fDE3MTczNDczMTh8MA&ixlib=rb-4.0.3&q=80&w=1080",
  },
  {
    title: "Automating Your Workflow with AI",
    date: "September 25, 2023",
    excerpt: "Discover how AI can automate repetitive tasks and enhance your productivity. From chatbots to automated content creation, the possibilities are endless.",
    image: "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxBSSUyMGF1dG9tYXRpb258ZW58MHx8fHwxNzE3MzQ3MzE5fDA&ixlib=rb-4.0.3&q=80&w=1080",
  },
  {
    title: "Top 10 AI Tools for 2023",
    date: "September 18, 2023",
    excerpt: "Explore the top AI tools that are making waves in 2023. These tools are designed to help you streamline your processes and achieve more with less effort.",
    image: "https://images.unsplash.com/photo-1622168717040-968b45075172?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxBSSUyMHRvb2xzfGVufDB8fHx8MTcxNzM0NzMxOXww&ixlib=rb-4.0.3&q=80&w=1080",
  },
];

const Index = () => {
  return (
    <Container maxW="container.lg" py={8} bg="#f7f7f7">
      <Box as="header" mb={8}>
        <Heading as="h1" size="2xl" textAlign="center" mb={4}>
          No-Code, Automation & AI Blog
        </Heading>
        <Text textAlign="center" fontSize="lg">
          Stay updated with the latest trends and tools in the world of no-code, automation, and AI.
        </Text>
      </Box>

      <VStack spacing={8} as="main">
        {blogPosts.map((post, index) => (
          <Box key={index} p={5} shadow="md" borderWidth="1px" borderRadius="md" width="100%">
            <HStack spacing={4}>
              <Image src={post.image} alt={post.title} boxSize="150px" objectFit="cover" borderRadius="md" />
              <VStack align="start" spacing={2}>
                <Heading as="h2" size="md">
                  {post.title}
                </Heading>
                <Text fontSize="sm" color="gray.500">
                  {post.date}
                </Text>
                <Text>{post.excerpt}</Text>
                <Link color="teal.500" href="#">
                  Read more
                </Link>
              </VStack>
            </HStack>
          </Box>
        ))}
      </VStack>

      <Box as="footer" mt={16} textAlign="center">
        <Text mb={4}>Follow us on social media</Text>
        <HStack spacing={4} justify="center">
          <IconButton aria-label="Twitter" icon={<FaTwitter />} size="lg" />
          <IconButton aria-label="LinkedIn" icon={<FaLinkedin />} size="lg" />
          <IconButton aria-label="GitHub" icon={<FaGithub />} size="lg" />
        </HStack>
        <Text mt={4}>&copy; 2023 No-Code, Automation & AI Blog. All rights reserved.</Text>
      </Box>
    </Container>
  );
};

export default Index;
