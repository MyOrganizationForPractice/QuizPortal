package com.exam.Service;

import java.util.List;
import java.util.Set;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.exam.Repository.CategoryRepository;
import com.exam.entity.Category;

@Service
public class CategoryServiceImpl implements CategoryService{

	@Autowired
	private CategoryRepository categoryRepo;
	
	@Override
	public Category addCategory(Category category) {
		return this.categoryRepo.save(category);
	}

	@Override
	public Category updateCategory(Category category) {
		return this.categoryRepo.save(category);
	}

	@Override
	public List<Category> getCategories() {
		return (List<Category>) this.categoryRepo.findAll();
	}

	@Override
	public Category getCategory(Long categoryId) {
		return this.categoryRepo.findById(categoryId).get();
	}

	@Override
	public void deleteCategory(Long categoryId) {
		this.categoryRepo.deleteById(categoryId);
	}
   
}
