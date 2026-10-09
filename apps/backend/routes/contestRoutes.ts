import { Router, type Request, type Response } from "express";

const router = Router();

router.post('/active', (req: Request, res: Response) => {
    const { offset, page } = req.query;
})

router.post('/fineshed', (req: Request, res: Response) => {
    const { offset, page } = req.query;
})

router.get('/:contestId', (req: Request, res: Response) => {
    const contestId = req.params.contestId;
})

router.get('/:contestId/:challangeId', (req: Request, res: Response) => {
    const contestId = req.params.contestId;
    const challangeId = req.params.challangeId;
})

router.get('/leaderboard/:contestId', (req: Request, res: Response) => {
    const contestId = req.params.contestId;
})

router.post('/submit/:challangeId', (req: Request, res: Response) => {
    const challangeId = req.params.challangeId;
})

export default router;