import { Request, Response } from "express";
import { createMenuObject } from "../helpers/createMenuObject";
import { getList } from "../models/Pet";


export const home = (req: Request, res: Response) => {
    let list = getList(req);

    res.render('pages/page', {
        menu: createMenuObject('all'),
        banner: {
            title: 'Todos os animais',
            background: 'allanimals.jpg'
        },
        action: '/',
        list
    });
};

export const dogs = (req: Request, res: Response) => {
    let list = getList(req, 'dog');

    res.render('pages/page', {
        menu: createMenuObject('dog'),
        banner: {
            title: 'Cachorros',
            background: 'banner_dog.jpg'
        },
        action: 'dogs',
        list
    });
};

export const cats = (req: Request, res: Response) => {
    let list = getList(req, 'cat');

    res.render('pages/page', {
        menu: createMenuObject('cat'),
        banner: {
            title: 'Gatos',
            background: 'banner_cat.jpg'
        },
        action: 'cats',
        list
    });
};

export const fish = (req: Request, res: Response) => {
    let list = getList(req, 'fish');

    res.render('pages/page', {
        menu: createMenuObject('fish'),
        banner: {
            title: 'Peixes',
            background: 'banner_fish.jpg'
        },
        action: 'fish',
        list
    });
};