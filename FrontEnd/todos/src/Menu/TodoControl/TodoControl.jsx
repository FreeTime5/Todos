import {
  Button,
  Card,
  CardBody,
  CardHeader,
  Divider,
  FormControl,
  FormHelperText,
  FormLabel,
  Heading,
  Input,
  Stack,
  TagCloseButton,
  Textarea,
} from "@chakra-ui/react";
import { useCallback, useMemo, useState } from "react";
import { serverUrl } from "../../config";
function TodoControl() {
  const [title, setTitle] = useState();
  const [description, setDescription] = useState();

  // const postTodoBodyData = useMemo(() => {
  //   return {
  //     title: title,
  //     description: description,
  //   };
  // }, [title, description]);

  // const postTodoOptions = useMemo(() => {
  //   return {
  //     method: "Post",
  //     body: JSON.stringify(postTodoBodyData),
  //   };
  // }, [postTodoBodyData]);

  // const postTodoRequest = useCallback(() => {
  //   fetch(serverUrl + "/Todo", postTodoOptions).then((response) => {
  //     if (!response.ok) {
  //       throw new Error("Invalid request body value");
  //     }
  //     return response.json();
  //   });
  // }, [postTodoOptions]);

  return (
    <Card>
      <CardHeader>
        <Heading textAlign="center" size="lg">
          Create your todo
        </Heading>
      </CardHeader>
      <CardBody>
        <form action={serverUrl + "/Todos"} method="POST">
          <Stack spacing="2">
            <FormControl>
              <FormLabel>Enter title</FormLabel>
              <FormHelperText>Max size 100 simbols</FormHelperText>
              <Input placeholder="Title" name="title" />
            </FormControl>
            <FormControl>
              <FormLabel>Enter description of todo</FormLabel>
              <Textarea
                placeholder="description"
                h="100px"
                name="description"
              />
            </FormControl>
            <FormControl>
              <Button type="submit">Create</Button>
            </FormControl>
          </Stack>
        </form>
      </CardBody>
    </Card>
  );
}

export default TodoControl;
