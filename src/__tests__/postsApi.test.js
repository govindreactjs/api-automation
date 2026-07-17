import { getPosts, getPostById, createPost, updatePost, deletePost } from '../api/postsApi';

describe('Posts API Automation Suite', () => {
    describe('GET requests', () => {
        test('returns all posts', async () => {
            const response = await getPosts();
            expect(response.status).toBe(200);
            expect(Array.isArray(response.data)).toBe(true);
            expect(response.data[0]).toHaveProperty('title');
        });

        test('returns a single post by ID', async () => {
            const response = await getPostById(1);
            expect(response.status).toBe(200);
            expect(response.data).toHaveProperty('id', 1);
        });

        test('negative test: invalid ID returns 404', async () => {
            await expect(getPostById(99999)).rejects.toThrow();
        });
    });

    describe('POST requests', () => {
        test('creates a new post', async () => {
            const newPost = { title: 'foo', body: 'bar', userId: 1 };
            const response = await createPost(newPost);
            expect(response.status).toBe(201);
            expect(response.data).toMatchObject(newPost);
        });
    });

    describe('PUT requests', () => {
        test('updates a post', async () => {
            const updatedPost = { id: 1, title: 'updated', body: 'updated body', userId: 1 };
            const response = await updatePost(1, updatedPost);
            expect(response.status).toBe(200);
            expect(response.data).toMatchObject(updatedPost);
        });
    });

    describe('DELETE requests', () => {
        test('deletes a post', async () => {
            const response = await deletePost(1);
            expect(response.status).toBe(200);
        });
    });
});
